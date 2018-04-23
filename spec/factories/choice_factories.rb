FactoryBot.define do
  factory :choice do
    association :question, factory: :question
    quiz_options FFaker::Lorem.word
  end
end