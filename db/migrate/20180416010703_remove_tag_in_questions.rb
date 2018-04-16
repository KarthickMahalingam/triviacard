class RemoveTagInQuestions < ActiveRecord::Migration[5.1]
  def change
    remove_reference :questions, :tag
  end
end
