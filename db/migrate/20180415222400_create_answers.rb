class CreateAnswers < ActiveRecord::Migration[5.1]
  def change
    create_table :answers do |t|
      t.references :question
      t.references :choice
      t.timestamps
    end
  end
end
