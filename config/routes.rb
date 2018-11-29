Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about_us', to: 'pages#about_us', as: :about_us
  get 'contact', to: 'pages#contact', as: :contact
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
