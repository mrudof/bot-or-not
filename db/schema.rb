# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161010204510) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.text     "key_code",                           null: false
    t.text     "stage",      default: "questVoting"
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
  end

  create_table "quest_members", force: :cascade do |t|
    t.boolean  "succeeded"
    t.integer  "user_id"
    t.integer  "quest_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quest_id"], name: "index_quest_members_on_quest_id", using: :btree
    t.index ["user_id"], name: "index_quest_members_on_user_id", using: :btree
  end

  create_table "quest_votes", force: :cascade do |t|
    t.boolean  "passed"
    t.integer  "user_id"
    t.integer  "quest_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["quest_id"], name: "index_quest_votes_on_quest_id", using: :btree
    t.index ["user_id", "quest_id"], name: "index_quest_votes_on_user_id_and_quest_id", unique: true, using: :btree
    t.index ["user_id"], name: "index_quest_votes_on_user_id", using: :btree
  end

  create_table "quests", force: :cascade do |t|
    t.integer  "round_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["round_id"], name: "index_quests_on_round_id", using: :btree
  end

  create_table "rounds", force: :cascade do |t|
    t.boolean  "outcome"
    t.integer  "game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_rounds_on_game_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "name",                         null: false
    t.boolean  "good"
    t.string   "character"
    t.boolean  "creator",      default: false
    t.integer  "order"
    t.integer  "quest_chosen", default: 0
    t.integer  "game_id"
    t.datetime "created_at",                   null: false
    t.datetime "updated_at",                   null: false
    t.index ["game_id"], name: "index_users_on_game_id", using: :btree
    t.index ["name", "game_id"], name: "index_users_on_name_and_game_id", unique: true, using: :btree
  end

end
