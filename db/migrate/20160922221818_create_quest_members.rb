class CreateQuestMembers < ActiveRecord::Migration[5.0]
  def change
    create_table :quest_members do |t|
      t.boolean :succeeded
      t.references :user
      t.references :quest 

      t.timestamps
    end
  end
end
