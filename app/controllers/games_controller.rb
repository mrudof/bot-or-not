class GamesController < ApplicationController
  def index
    # for now,  giving the first user to current user when session is not set
    @currentUser = current_user || User.first
    @currentGame = @currentUser.game
    @currentRound = @currentUser.game.rounds.last
    @countRounds = @currentUser.game.rounds.count
    @currentQuests = @currentUser.game.rounds.last.quests.last
    @countQuests = @currentUser.game.rounds.last.quests.count
  end

  def new
  end

  def create
    game = Game.create

    round = Round.create(game_id: game.id)
    # Creator is created here instead of in user controller.

    user = User.new(name: params[:name], creator: params[:creator], game_id: game.id)
    if user.save!
      session[:user_id] = user.id
      redirect_to '/games/new'
    end
  end

  private

end
