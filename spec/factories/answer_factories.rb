FactoryBot.define do
  factory :answer do
    association :question, factory: :question
    association :choice, factory: :choice
  end
end