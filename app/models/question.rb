class Question < ApplicationRecord
  belongs_to :user
  has_many :question_tags
  has_many :tags, through: :question_tags
  has_many :choices, dependent: :destroy
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers
  accepts_nested_attributes_for :choices
  accepts_nested_attributes_for :question_tags
  accepts_nested_attributes_for :tags
end
