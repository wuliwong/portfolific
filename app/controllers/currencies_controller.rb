class CurrenciesController < ApplicationController
  def index
    begin
      currencies = JSON.parse(File.read(File.join(Rails.root, "CurrencyCode.json")))
    rescue => e
      render json: { "error": { "code": 500, "message": e } }
    end

    render json: currencies
  end
end
