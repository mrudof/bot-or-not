class GamesController < ApplicationController
  def index
  end

  def create
    game = Game.create()
    user = User.create
  end

  private

end
