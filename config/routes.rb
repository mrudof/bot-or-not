Rails.application.routes.draw do
  root to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games do
    get '/users/choose', to: 'users#choose'
    resources :rounds do
      resources :quests
    end
    resources :users
    put '/games/:game_id/users/update', to: 'users#update'
  end
  resources :quests do
    resources :quest_members
    resources :quest_votes
    #route to update quests_chosen for a user
  end

end
