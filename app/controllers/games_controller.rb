class GamesController < ApplicationController
  def index
    render component: 'Game', props: { stuff: "stuff passed from gamescontroller!" }
  end

  def new
  end

  def create
    game = Game.create
    user = User.create(name: params[:name], creator: params[:creator], game_id: game.id)
    if user.save
      session[:user_id] = user.id
      redirect_to '/games/new'
    end
  end

  private

end
