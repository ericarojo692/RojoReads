Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show, :update]
      resources :shelves, only: [:index, :show, :create, :destroy]
      resources :reviews, only: [:index, :create]
      resources :ratings, only: [:index, :create]
      resources :books, only: [:index, :create]
      post '/login', to: 'sessions#create'
    end
  end
  
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  
  
end
