class AddDefaultToUserScores < ActiveRecord::Migration[5.1]
  def change
    change_column_default :user_scores, :score, 0
  end
end
