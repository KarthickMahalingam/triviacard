class QuizController < ApplicationController
  skip_before_action :verify_authenticity_token
  def new
    @tags = Tag.all
  end

  def create
    binding.pry
    redirect_to quiz_create_path
  end

  private

  def user_params
    params.require('question').permit(:question, :answer, :tag_ids=>[], :choices=>[])
  end
end
