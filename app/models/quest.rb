class Quest < ApplicationRecord
  belongs_to :round
  has_one :game, through: :round
  has_many :quest_members
  has_many :quest_votes
end
