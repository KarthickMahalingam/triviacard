class Choice < ApplicationRecord
  belongs_to :question, required: true
  has_many :answers, dependent: :destroy
end
