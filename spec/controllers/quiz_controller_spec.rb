require 'rails_helper'
require 'spec_helper'
RSpec.describe Users::QuizController, type: :controller do
  let(:user) { FactoryBot.create(:user) }
  let(:question) { FactoryBot.create(:question, user_id: user.id) }
  let(:choice) { FactoryBot.create(:choice, question_id: question.id) }

  describe 'Quiz controller' do
    before do
      @attr = {question: {user_id: user.id,
                          question: 'What is Java?',
                          choices_attributes: [{quiz_options: 'Object oriented'},
                                               {quiz_options: 'Dont know'},
                                               {quiz_options: 'Coffee bean'},
                                               {quiz_options: 'All the above'}]},
               answer: [0]}
    end
    it 'should create new question' do
      lambda do
        post :create, question: @attr
        response.should redirect_to(quiz_new_path)
      end
    end
  end
end