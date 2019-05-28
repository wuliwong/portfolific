import { observable } from 'mobx';
import County from './country';
import Asset from './asset';

export default class Portfolio {
  @observable name;
  @observable slug;
  @observable countryCode;
  @observable country;
  @observable assets = [];

  constructor(data) {
    this.name = data.name;
    this.slug = this.name.replace(/\s+/g, '-').toLowerCase();
    this.countryCode = data.countryCode;

    if (data.fxAssets != undefined) {
      _.each(data.fxAssets, (a) => {
        this.assets.push(new Asset(a));
      });
    }
  }
}