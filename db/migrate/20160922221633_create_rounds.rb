class CreateRounds < ActiveRecord::Migration[5.0]
  def change
    create_table :rounds do |t|
      t.boolean :outcome
      t.references :game

      t.timestamps
    end
  end
end
