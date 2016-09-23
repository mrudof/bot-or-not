class GamesController < ApplicationController
  def index
    render component: 'Game', props: { stuff: "stuff passed from gamescontroller!" }
  end

  def create
    game = Game.create()
    user = User.create
  end

  private

end
