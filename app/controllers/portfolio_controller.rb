class PortfolioController < ApplicationController
  def index
    begin
      portfolios = JSON.parse(File.read(File.join(Rails.root, "portfolio.json")))
    rescue => e
      render json: { "error": { "code": 500, "message": e } }
    end

    render json: portfolios
  end
end
