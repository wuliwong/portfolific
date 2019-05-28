class ExchangeRatesController < ApplicationController
  require 'faraday'

  def index
    # proxy request to openexchangerates.org
    response = Faraday.get("http://openexchangerates.org/api/latest.json?app_id=925b5c034e404a678862b0ea49a2fab6")

    begin
      exchange_rates = JSON.parse(response.body)
    rescue => e
      render json: { "error": { "status": 500, "message": e }}
    end

    render json: exchange_rates
  end
end
