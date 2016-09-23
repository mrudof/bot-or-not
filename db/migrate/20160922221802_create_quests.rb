class CreateQuests < ActiveRecord::Migration[5.0]
  def change
    create_table :quests do |t|
      t.references :round
      

      t.timestamps
    end
  end
end
