class QuestsController < ApplicationController
  #
  # def index
  #   #used for testing
  #   # @current_user = User.first
  #   # @current_game = Game.first
  #   # @current_round = Round.first
  # end

  def new
    @game = Game.find(params[:game_id])
    @users = @game.users
    render json: @users
  end

  def create
    @round = Round.find(params[:round_id])
    @quest = Quest.new(round_id: @round.id)
    @quest.save
    render json: @quest
  end



end
