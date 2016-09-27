class QuestVotesController < ApplicationController
  def create
    currentQuest = Quest.find(params[:quest_id])
    #need to use a fake 'current_user' for now
    currentUser_id = current_user.id
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

  def results
    quest = Quest.find(params[:quest_id])
    questVotes = quest.quest_votes
    total_votes = questVotes.length.to_f
    passes = questVotes.where(passed: true)

    if passes.length > total_votes/2
      passed = true
    else
      passed = false
    end
      render json: passed.to_json
  end

end
