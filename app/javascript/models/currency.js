import { observable } from 'mobx';

export default class Currency {
  @observable isoCode;
  @observable name;
  @observable symbol;

  constructor(data) {
    this.isoCode = data.isoCode;
    this.name = data.name;
    this.symbol = data.symbol;
  }
}