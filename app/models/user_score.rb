class UserScore < ApplicationRecord
  belongs_to :user

  def update_user_score(result)
    self.score = self.score + 4 if result == "success"
    self.score = (self.score - 1) < 0 ? 0 : self.score-1 if result == "fail"
  end

  def get_user_score(user_id)
    new(user_id: user_id) if self.present?
    self
  end
end