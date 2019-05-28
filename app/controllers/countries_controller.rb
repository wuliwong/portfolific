class CountriesController < ApplicationController
  def index
    begin
      countries = JSON.parse(File.read(File.join(Rails.root, "Country.json")))
    rescue => e
      render json: { "error": { "code": 500, "message": e } }
    end

    render json: countries
  end
end
