import { observable } from 'mobx';

export default class Asset {
  @observable currecyCode;
  @observable amount;

  constructor(data) {
    this.currecyCode = data.currecyCode;
    this.amount = data.amount;
  }
}