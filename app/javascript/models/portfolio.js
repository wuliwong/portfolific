import { observable } from 'mobx';
import County from './country';
import Asset from './asset';
import exchangeRateStore from '../stores/exchange_rate_store';
import currencyStore from '../stores/currency_store';
import countryStore from '../stores/country_store';

export default class Portfolio {
  @observable name;
  @observable slug;
  @observable countryCode;
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

  totalValueForCountry(countryCode) {
    let totalValue = 0;

    _.each(this.assets, (asset) => {
      totalValue += exchangeRateStore.exchangeRates[asset.currencyCode]*parseFloat(asset.amount)
    });

    return totalValue;
  }

  totalValueInNativeCurrency() {
    return this.totalValueForCountry(this.countryCode)
  }

  nativeCurrencySymbol() {
    const country = countryStore.findByCountryCode(this.countryCode);
    console.log(country);
    return currencyStore.currencySymbolForCode(country.currencyCode);
  }
}