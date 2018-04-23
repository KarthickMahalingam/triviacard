class CreatePlayerAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :player_answers do |t|
      t.references :user
      t.references :question
      t.boolean :correct
      t.timestamps
    end
  end
end
