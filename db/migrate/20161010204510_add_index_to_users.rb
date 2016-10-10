class AddIndexToUsers < ActiveRecord::Migration[5.0]
  def change
    add_index :users, [:name, :game_id], unique: true
  end
end
