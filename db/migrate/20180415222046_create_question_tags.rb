class CreateQuestionTags < ActiveRecord::Migration[5.1]
  def change
    create_table :question_tags do |t|
      t.integer :question_id, nil: false, index: true
      t.integer :tag_id, nil: false, index: true
      t.timestamps
    end
  end
end
