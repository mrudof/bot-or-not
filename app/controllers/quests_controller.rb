class QuestsController < ApplicationController

  def index
    #used for testing
    @current_user = User.first
    @current_game = Game.first
    @current_round = Round.first
  end

  def new
    @game = Game.find(params[:game_id])
    @users = @game.users
    render json: @users
  end

end
