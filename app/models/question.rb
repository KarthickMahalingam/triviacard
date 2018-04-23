class Question < ApplicationRecord
  belongs_to :user
  has_many :question_tags
  has_many :tags, through: :question_tags
  has_many :choices, dependent: :destroy
  has_many :answers, dependent: :destroy
  has_many :player_answers, foreign_key: 'question_id', dependent:  :destroy
  accepts_nested_attributes_for :answers
  accepts_nested_attributes_for :choices
  accepts_nested_attributes_for :question_tags
  accepts_nested_attributes_for :tags
  scope :unattended_questions, ->(user) do
    where.not(id: user.player_answers.pluck(:question_id)).shuffle.first
  end

end
