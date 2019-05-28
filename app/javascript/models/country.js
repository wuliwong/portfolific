import { observable } from 'mobx';

export default class Country {
  @observable code;
  @observable name;
  @observable currencyCode;

  constructor(data) {
    console.log(data);
    this.code = data.code;
    this.name = data.name;
    this.currencyCode = data.currencyCode;
  }
}