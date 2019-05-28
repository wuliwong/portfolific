Rails.application.routes.draw do
  get 'portfolio/index'
  root 'home#landing'
  get 'home/landing'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
