import { observable, action } from 'mobx';
import _ from 'lodash';
import axios from 'axios';
import Country from '../models/country';

class CountryStore {
  @observable countries = [];

  constructor() {
  }

  @action
  fetchCountries(params) {
    return axios({
      method: 'get',
      url: `/countries/`,
      params: params
    }).then(action((response) => {
      this.countries = _.map(response.data, (country) => new Country(country));
    }));
  }
}

const store = new CountryStore();
export default store;