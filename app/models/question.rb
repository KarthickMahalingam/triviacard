class Question < ApplicationRecord
  belongs_to :user
  has_many :question_tags
  has_many :tags, through: :question_tags
  has_many :choices, dependent: :destroy
  has_many :answers, dependent: :destroy
end