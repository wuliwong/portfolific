import { observable, action } from 'mobx';
import _ from 'lodash';
import axios from 'axios';

class ExchangeRateStore {
  @observable exchangeRates = {};

  constructor() {
    this.fetchExchangeRates()
  }

  @action
  fetchExchangeRates(params) {
    return axios({
      method: 'get',
      url: `http://openexchangerates.org/api/latest.json?app_id=925b5c034e404a678862b0ea49a2fab6`,
      params: params
    }).then(action((response) => {
      this.exchangeRates = response.data.rates;
    }));
  }
}

const store = new ExchangeRateStore();
export default store;