class RoundsController < ApplicationController
  def index
    game = Game.find(params[:game_id])
    rounds = game.rounds
    render json: rounds.to_json
  end
  def new
    @game = Game.find(params[:game_id])
    @rounds = @game.rounds
  end
  def show
    hash = {
      5 => [2,3,2,3,3],
      6 => [2,3,4,3,4],
      7 => [2,3,3,4,4],
      8 => [3,4,4,5,5],
      9 => [3,4,4,5,5],
      10 => [3,4,4,5,5]
    }
    @game = Game.find(params[:game_id])
    @currentRound = @game.rounds.length
    @numOfPlayers = @game.users.length
    @numOnQuest = hash[@numOfPlayers][@currentRound - 1]
    render json: @numOnQuest.to_json
  end

  def latest_quest
    #returns the latest quest of the round
    @game = Game.find(params[:game_id])
    @round = Round.find(params[:round_id])
    @recent_quest = @round.quests.last
    if @recent_quest
      @recent_quest_members = @recent_quest.quest_members
    else
      @recent_quest_members = ["not initialized"]
      @recent_quest = "not initialized"
    end

    hash = {quest: @recent_quest, members: @recent_quest_members}
    render json: hash.to_json
  end

end
