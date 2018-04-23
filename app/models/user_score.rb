class UserScore < ApplicationRecord
  belongs_to :user

  def update_user_score(result)
    self.score = self.score + 4 if result == "success"
    self.score = (self.score - 1) < 0 ? 0 : self.score-1 if result == "fail"
  end

  def init_score
    new(score: 0)
  end
end