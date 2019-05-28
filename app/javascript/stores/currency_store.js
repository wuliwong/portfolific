import { observable, action } from 'mobx';
import _ from 'lodash';
import axios from 'axios';
import Currency from '../models/currency';

class CurrencyStore {
  @observable currencies = [];

  constructor() {
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