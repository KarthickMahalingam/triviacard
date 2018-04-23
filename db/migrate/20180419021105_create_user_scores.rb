class CreateUserScores < ActiveRecord::Migration[5.1]
  def change
    create_table :user_scores do |t|
      t.references :user
      t.integer :score
    end
  end
end
