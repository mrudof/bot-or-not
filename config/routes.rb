Rails.application.routes.draw do
  root to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games do
    resources :rounds do
      resources :quests
    end
    resources :users
    put '/games/:game_id/users/update', to: 'users#update'
  end
  resources :quests do
    resources :quest_members
    #route to update quests_chosen for a user
    get '/users', to: 'quests#choose'
  end
  
end
