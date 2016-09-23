class QuestsController < ApplicationController
  def new
    @game = Game.find(params[:game_id])
    @users = User.all
  end
end
