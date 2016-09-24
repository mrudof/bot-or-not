class QuestVotesController < ApplicationController
  def create
    if params[:vote] == 'Approve'
      @quest_vote = QuestVote.create(passed: true, user: current_user, quest: currentQuest)
    elsif params[:vote] == 'Reject'
      @quest_vote = QuestVote.create(passed: false, user: current_user, quest: currentQuest)
    end
  end
end
