class QuestVote < ApplicationRecord
  belongs_to :quest
  belongs_to :user
  validates :user_id, uniqueness: { scope: :quest_id}
end
