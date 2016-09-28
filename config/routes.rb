Rails.application.routes.draw do
  root to: 'pages#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games do
    get '/users/choose', to: 'users#choose'
    resources :rounds do
      get '/latest_quest', to: 'rounds#latest_quest'
      resources :quests
    end
    resources :users
    get '/status', to: 'games#status'
    put '/status', to: 'games#update'
  end
  resources :quests do
    get '/quest_votes/results', to: 'quest_votes#results'
    get '/quest_members/results', to: 'quest_members#results'
    resources :quest_members
    resources :quest_votes
    #route to update quests_chosen for a user
  end

end
