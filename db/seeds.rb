# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.fir
users = ([{name: "Adam", good: true, order: 1, game_id: 1}, {name: "Matt", good: false, order: 2, game_id: 1}])
User.create(users)
games = ([{creator_id: 1, key_code: "test"}])
Game.create(games)
rounds = ([{game_id: 1, outcome: false, round_number: 1}])
Round.create(rounds)
quests = ([{round_id: 1}])
Quest.create(quests)
quest_members = ([{succeeded: true, user_id: 1, quest_id: 1}, {succeeded: false, user_id: 2, quest_id: 1}])
QuestMember.create(quest_members)
quest_votes = ([{passed: true, user_id: 1, quest_id: 1}, {passed: false, user_id: 2, quest_id: 1}])
QuestVote.create(quest_votes)
