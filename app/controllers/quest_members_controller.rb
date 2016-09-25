class QuestMembersController < ApplicationController
  def index
    @quest = Quest.find(params[:quest_id])
    @quest_members = @quest.quest_members
    render json: @quest_members.to_json
  end

  def new
  end

  def create
    #increases the quest_user count for the person making the quest
    @user = User.find(params[:userID])
    qc = @user.quest_chosen + 1
    @user.update(quest_chosen: qc)
   #makes new quest members
    @quest = Quest.find(params[:quest_id])
    @game = Game.find(@quest.round.game_id)
    params[:quest].each do |quest|
      @user = @game.users.find_by(name: quest)
      QuestMember.create(quest_id: @quest.id, user_id: @user.id)
    end
    @quest_members = @quest.quest_members
    render json: @quest_members.as_json(include: :user)
  end


  def update
    if params[:vote] == 'Succeed'
        @quest_member = QuestMember.update(succeeded: true)
    elsif params[:vote] == 'Fail'
        @quest_member = QuestMember.update(succeeded: false)
    end
  end

end
