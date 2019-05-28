import React from 'react';
import { observer } from 'mobx-react';
import countryStore from '../stores/country_store';
import currencyStore from '../stores/currency_store';
import portfolioStore from '../stores/portfolio_store';
import exchangeRateStore from '../stores/exchange_rate_store';
@observer
class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    countryStore.fetchCountries();
    currencyStore.fetchCurrencies();
    exchangeRateStore.fetchExchangeRates();
    portfolioStore.fetchPortfolios();
  }

  countries() {
    return _.map(countryStore.countries, (country) => {
      return <p key={`country-${country.code}`}>{country.name}</p>;
    });
  }

  currencies() {
    return _.map(currencyStore.currencies, (currency) => {
      return <p key={`currency-${currency.isoCode}-${currency.symbol}`}>{currency.name}</p>;
    });
  }

  exchangeRates() {
    return _.map(exchangeRateStore.exchangeRates, (k,v) => {
      return <p key={`rate-${v}`}>{v}: {k}</p>;
    });
  }

  portfolios() {
    return _.map(portfolioStore.portfolios, (portfolio) => {
      return <p key={`portfolio-${portfolio.slug}`}>{portfolio.name}</p>;
    });
  }

  render() {
    if (countryStore.countries == [] || currencyStore.currencies == [] || exchangeRateStore.exchangeRates == {} || portfolioStore.portfolios == []) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <div><h2>Countries</h2>{ this.countries() }</div>
          <div><h2>Currencies</h2>{ this.currencies() }</div>
          <div><h2>Rates</h2>{ this.exchangeRates() }</div>
          <div><h2>Portfolios</h2>{ this.portfolios() }</div>
        </div>
        )
    }
  }
}

export default Landing;