FactoryBot.define do
  factory :question do
    question FFaker::Lorem.sentence
    association :user, factory: :user
  end
end