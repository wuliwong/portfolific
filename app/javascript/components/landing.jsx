import React from 'react';
import { observer } from 'mobx-react';
import countryStore from '../stores/country_store';
import currencyStore from '../stores/currency_store';
import portfolioStore from '../stores/portfolio_store';
import exchangeRateStore from '../stores/exchange_rate_store';
import { round } from '../utils/formatter';
import { Divider } from 'muicss/react';

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

  listHeaders() {
    return <p key="list-headers">Name</p>
  }

  portfolios() {
    return _.map(portfolioStore.portfolios, (portfolio) => {
      return <tr key={`portfolio-${portfolio.slug}`}><td>{portfolio.name}</td><td>{`${portfolio.nativeCurrencySymbol()} ${Number(round(portfolio.totalValueInNativeCurrency())).toLocaleString()}`}</td></tr>;
    });
  }

  render() {
    if (countryStore.countries == [] || currencyStore.currencies == [] || exchangeRateStore.exchangeRates == undefined || portfolioStore.portfolios == []) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div>
          <div>
            <h4 className="mui--text-center">Portfolio List in Native Currency</h4>
            <table className="mui-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Total Value</th>
                </tr>
              </thead>
              <tbody>
                { this.portfolios() }
              </tbody>
            </table>
          </div>
        </div>
        )
    }
  }
}

export default Landing;