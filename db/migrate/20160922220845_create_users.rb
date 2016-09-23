class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.boolean :good
      t.boolean :creator, default: false
      t.integer :order
      t.integer :quest_chosen, default: 0
      t.references :game

      t.timestamps
    end
  end
end
