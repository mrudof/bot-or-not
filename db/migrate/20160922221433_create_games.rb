class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.text :key_code, null: false
      t.text :stage, default: "questVoting"

      t.timestamps
    end
  end
end
