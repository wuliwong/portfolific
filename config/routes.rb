Rails.application.routes.draw do
  get '/exchange_rates' => 'exchange_rates#index'
  get '/currencies' => 'currencies#index'
  get '/countries' => 'countries#index'
  get '/portfolios' => 'portfolio#index'
  root 'home#landing'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
