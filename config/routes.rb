Rails.application.routes.draw do
  root to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games do
    resources :rounds do
      resources :quests
    end
    resources :users
  end

end
