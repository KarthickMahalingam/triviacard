class CreateQuizTags < ActiveRecord::Migration[5.1]
  def change
    create_table :quiz_tags do |t|
      t.string :topic
      t.timestamps
    end
  end
end
