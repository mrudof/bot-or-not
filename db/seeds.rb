# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.fir


game1 = Game.create(key_code: "YES")

user1  = User.create(name: "Adam", good: true, creator: true, order: 1, game: game1)
user2  = User.create(name: "Melissa", good: false, creator: false, order: 2, game: game1)
user3  = User.create(name: "Anders", good: false, creator: false, order: 3, game: game1)
user4  = User.create(name: "Matt", good: false, creator: false, order: 4, game: game1)
user5  = User.create(name: "Fabio", good: true, creator: false, order: 5, game: game1)

round1 = Round.create(game: game1, outcome: false)

quest1 = Quest.create(round: round1)
quest2 = Quest.create(round: round1)

quest_member1 = QuestMember.create(succeeded: true, user: user1, quest: quest1)
quest_member2 = QuestMember.create(succeeded: false, user: user2, quest: quest1)

quest_vote1 = QuestVote.create(passed: true, user: user1, quest: quest1)
quest_vote2 = QuestVote.create(passed: false, user: user2, quest: quest1)
