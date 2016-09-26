class User < ApplicationRecord
  belongs_to :game
  has_many :quest_votes

  # has_many :quests_gone_on, through: :quest_member, source: :quest
  # has_many :quests_voted_on, through: :quest_vote, source: :quest



end
