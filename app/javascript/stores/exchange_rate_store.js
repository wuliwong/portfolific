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
      url: '/exchange_rates',
      params: params
    }).then(action((response) => {
      this.exchangeRates = response.data.rates;
    }));
  }
}

const store = new ExchangeRateStore();
export default store;