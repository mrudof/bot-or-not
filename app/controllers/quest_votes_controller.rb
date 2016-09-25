class QuestVotesController < ApplicationController
  def create
    currentQuest = Quest.find(params[:quest_id])
    #need to use a fake 'current_user' for now
    currentUser_id = 1

    if params[:vote] == 'Approve'
      @quest_vote = QuestVote.create(passed: true, user_id: currentUser_id, quest_id: currentQuest.id)
    elsif params[:vote] == 'Reject'
      @quest_vote = QuestVote.create(passed: false, user_id: currentUser_id, quest_id: currentQuest.id)
    end
  end

  def index
    quest = Quest.find(params[:quest_id])
    quest_votes = quest.quest_votes
    render json: quest_votes.as_json(include: :user)
  end

  #  def index
  #    @quest = Quest.find(params[:quest_id])
  #    @quest_votes = @quest.quest_votes
  #    render json: @quest_votes.as_json(include: :user)
  #  end

end
