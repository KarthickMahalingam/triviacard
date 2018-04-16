class QuestionTag < ApplicationRecord
  belongs_to :question, required: false
  belongs_to :tag, required: false
end