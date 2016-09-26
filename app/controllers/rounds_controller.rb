class RoundsController < ApplicationController

  def new
    @game = Game.find(params[:game_id])
    @rounds = @game.rounds
  end

  def latest_quest
    #returns the latest quest of the round
    @game = Game.find(params[:game_id])
    @round = Round.find(params[:round_id])
    @recent_quest = @round.quests.last
    if @recent_quest
      @recent_quest_members = @recent_quest.quest_members
    else
      @recent_quest_members = ["hi", "hello"]
      @recent_quest = "hi"
    end

    hash = {quest: @recent_quest, members: @recent_quest_members}
    render json: hash.to_json
  end

end
