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

  totalValueInUSD() {
    if (exchangeRateStore.exchangeRates == undefined) {
      return 0;
    } else {
      let totalValue = 0;

      _.each(this.assets, (asset) => {
        totalValue += parseFloat(asset.amount)/exchangeRateStore.exchangeRates[asset.currencyCode]
      });

      return totalValue;
    }
  }

  totalValueForCountry(countryCode) {
    const country = countryStore.findByCountryCode(this.countryCode);

    if (country == undefined) {
      return 0;
    } else {
      return exchangeRateStore.exchangeRates[country.currencyCode]*this.totalValueInUSD();
    }
  }

  totalValueInNativeCurrency() {
    return this.totalValueForCountry(this.countryCode)
  }

  nativeCurrencySymbol() {
    const country = countryStore.findByCountryCode(this.countryCode);

    if (country == undefined) {
      return null;
    } else {
      return currencyStore.currencySymbolForCode(country.currencyCode);
    }
  }
}