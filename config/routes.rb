Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users, only: [:index, :create, :show, :update]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :logins, only: [:create]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :shelves, only: [:index, :show, :create, :destroy]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :reviews, only: [:index, :create]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :ratings, only: [:index, :create]
    end
  end
  namespace :api do
    namespace :v1 do
      resources :books, only: [:index, :create]
    end
  end
    
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/books", to: "books#index"
  
end
