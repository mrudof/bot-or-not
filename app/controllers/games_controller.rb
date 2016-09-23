class GamesController < ApplicationController
  def index
    render component: 'Game', props: { stuff: "stuff passed from gamescontroller!" }
  end

  def create
    game = Game.create
    user = User.create(name: params[:name], creator: params[:creator], game_id: game.id)
  end

  private

end
