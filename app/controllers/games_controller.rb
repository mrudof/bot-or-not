class GamesController < ApplicationController
  def index
    # for now,  giving the first user to current user when session is not set
    @currentUser = current_user # || User.find(1) # uncomment to debug
    @currentGame = @currentUser.game
    @currentRound = @currentUser.game.rounds.last
    @rounds = @currentUser.game.rounds
    @countRounds = @currentUser.game.rounds.count
    @currentQuests = @currentUser.game.rounds.last.quests.last
    @countQuests = @currentUser.game.rounds.last.quests.count
    @gameUsers = @currentGame.users
    @gameStage = @currentGame.stage

    @quest_hash = {
      2 => [1,2,2,1,1],
      4 => [2,3,2,3,3],
      5 => [2,3,2,3,3],
      6 => [2,3,4,3,4],
      7 => [2,3,3,4,4],
      8 => [3,4,4,5,5],
      9 => [3,4,4,5,5],
      10 => [3,4,4,5,5]
    }
  end

  def new
    @current_game = current_user.game
    @current_user = current_user
    redirect_to "/games" if current_user.good != nil
  end

  def update_board
    game = Game.find(params[:game_id])
    rounds = game.rounds
    arr = []
    # if we edit the text here make sure to also update the GameResult component
    rounds.each do |round|
      if round.outcome == true
        arr << "Good Prevails"
      elsif round.outcome == false
        arr << "Evil Won"
      end
    end
    render json: arr.to_json
  end

  def create
    @current_game = Game.create

    round = Round.create(game_id: @current_game.id)
    # Creator is created here instead of in user controller.

    @user = User.new(name: params[:name], creator: params[:creator], game_id: @current_game.id)
    if @user.save
      session[:user_id] = @user.id
      redirect_to '/games/new'
    else
      @errors = @user.errors.full_messages
      render 'pages/index'
    end
  end

  def update
    currentUser = current_user || User.find(1)
    currentGame = currentUser.game
    currentQuest = currentGame.rounds.last.quests.last # this may be nill
    p "params are"
    p params[:response]
    @response = params[:response]
    currentGame.update(stage: @response)
    render json: @response.to_json
  end

# split into a post and get status

  def status
    #eventually this will be dynamic
    currentUser = current_user || User.find(1)
    gameStage = currentUser.game.stage
    # currentGame = currentuser.game # OR: Game.find(params[:game_id])
    # currentQuest = currentGame.rounds.last.quests.last
    # #if else for end game
    # if QuestVote.find_by(user_id: currentUser.id, quest_id: currentQuest.id)
    #   debugger
    #   @response = "questVoteDone" # change this to a better term!
    # else
    #   @response = "questVoting"
    # end
    render json: gameStage.to_json
  end

  def current_round
    @game = Game.find(params[:game_id])
    @currentRound = @game.rounds.length
    render json: @currentRound.to_json
  end

  private

end
