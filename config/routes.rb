Rails.application.routes.draw do
  get 'currencies/index'
  get 'countries/index'
  get 'portfolio/index'
  root 'home#landing'
  get 'home/landing'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
