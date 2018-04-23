class Choice < ApplicationRecord
  belongs_to :question, required: true
  has_many :answers, dependent: :destroy
  accepts_nested_attributes_for :answers
  attr_reader :quiz_option

end
