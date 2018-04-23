class QuizController < ApplicationController
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token
  def new
    @tags = Tag.all
    @question = Question.new
    @choice = @question.choices.build
    @choice.answers.build
  end

  def create
    question = Question.create(question_params)
    create_answer = QuestionSetter.new(question)
    create_answer.create_from_params(answer_params)
    redirect_to quiz_new_path
  end

  private

  def question_params
    params.require(:question).permit(:user_id,
                                     :question,
                                     tag_ids: [],
                                     choices_attributes:[:quiz_options])
  end

  def answer_params
    params.require('answer')
  end
end
