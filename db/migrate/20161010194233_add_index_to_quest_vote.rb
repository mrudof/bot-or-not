class AddIndexToQuestVote < ActiveRecord::Migration[5.0]
  def change
     add_index :quest_votes, [:user_id, :quest_id], unique: true
  end
end
