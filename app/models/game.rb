class Game < ApplicationRecord
  has_many :users
  has_many :rounds

  before_save :generate_code

  def generate_code
    self.key_code = SecureRandom.urlsafe_base64(2) unless self.key_code
  end
end
