class Game < ApplicationRecord
  has_many :users
  has_many :rounds
  has_many :quests, through: :rounds
  before_save :generate_code

  def generate_code
    self.key_code = [*('a'..'z')].sample(4).join unless self.key_code
  end

  def next_up
    users = self.users
    arr = []
    min = users.first
    users.each do |user|
      if user.quest_chosen < min.quest_chosen
        min = user
      end
    end
    users.each do |user|
      if user.quest_chosen == min.quest_chosen
        arr << user
      end
    end
    minRank = arr.first
    arr.each do |user|
      if user.order < minRank.order
        minRank = user
      end
    end
    minRank
  end


end
