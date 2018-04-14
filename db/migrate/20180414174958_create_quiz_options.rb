class CreateQuizOptions < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_options do |t|
      t.references :quiz_questions
      t.string :answer
      t.boolean :correct
      t.timestamps
    end
  end
end
