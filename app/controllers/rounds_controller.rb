class RoundsController < ApplicationController
  def new
    @game = Game.find(params[:game_id])
    @rounds = @game.rounds
  end
end
