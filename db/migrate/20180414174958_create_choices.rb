class CreateChoices < ActiveRecord::Migration[5.1]
  def change
    create_table :choices do |t|
      t.references :question
      t.string :quiz_options
      t.timestamps
    end
  end
end
