import { observable, action } from 'mobx';
import _ from 'lodash';
import axios from 'axios';
import Portfolio from '../models/portfolio';

class PortfolioStore {
  @observable portfolios = [];

  constructor() {
    this.fetchPortfolios();
  }

  @action
  fetchPortfolios(params) {
    return axios({
      method: 'get',
      url: `/portfolios/`,
      params: params
    }).then(action((response) => {
      this.portfolios = _.map(response.data.portfolios, (portfolio) => new Portfolio(portfolio));
    }));
  }
}

const store = new PortfolioStore();
export default store;