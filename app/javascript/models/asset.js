import { observable } from 'mobx';

export default class Asset {
  @observable currencyCode;
  @observable amount;

  constructor(data) {
    this.currencyCode = data.currencyCode;
    this.amount = data.amount;
  }
}