class GamesController < ApplicationController
  def index
    # binding.pry
    current_game = current_user.game_id
    render component: 'Game', props: { currentUser: current_user }
  end

  def new
  end

  def create
    game = Game.create
    binding.pry
    user = User.new(name: params[:name], creator: params[:creator], game_id: game.id)
    if user.save
      session[:user_id] = user.id
      redirect_to '/games/new'
    end
  end

  private

end
