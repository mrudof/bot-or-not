class CreateQuestVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :quest_votes do |t|
      t.boolean :passed
      t.references :user
      t.references :quest

      t.timestamps
    end
  end
end
