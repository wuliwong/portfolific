import { observable, action } from 'mobx';
import _ from 'lodash';
import axios from 'axios';
import Currency from '../models/currency';

class CurrencyStore {
  @observable currencies = [];

  constructor() {
  }

  currencySymbolForCode(currencyCode) {
    const currency =  _.filter(this.currencies, (currency) => { return currency.isoCode == currencyCode })[0];

    if (currency == undefined) {
      return null
    } else {
      return currency.symbol;
    }
  }

  @action
  fetchCurrencies(params) {
    return axios({
      method: 'get',
      url: `/currencies/`,
      params: params
    }).then(action((response) => {
      this.currencies = _.map(response.data, (currency) => new Currency(currency));
    }));
  }
}

const store = new CurrencyStore();
export default store;