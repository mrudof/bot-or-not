class QuestMembersController < ApplicationController
  def index
    @quest = Quest.find(params[:quest_id])
    @quest_members = @quest.quest_members
    render json: @quest_members.to_json
  end

  def new
  end

  def create
    @quest = Quest.find(params[:quest_id])
    @game = Game.find(@quest.round.game_id)
    params[:quest].each do |quest|
      @user = @game.users.find_by(name: quest)
      QuestMember.create(quest_id: @quest.id, user_id: @user.id)
    end
  end
end
