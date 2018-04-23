class ChallengeController < ApplicationController
  before_action :authenticate_user!
  def show
    @unattended_question = Question.all.unattended_questions(current_user)
    @question = @unattended_question.id
    respond_to do |format|
      format.html
      format.js
    end
  end

  def index
    @question =  question_id_params
    @unattended_question =  Question.find @question
    @selected_options = selected_options_params
    @answers = @unattended_question.answers.pluck(:choice_id)
    if @answers.to_set == @selected_options.to_set
      player_record = current_user.player_answers.new(question_id: @question, correct: true)
      if player_record.save
        @user_score = UserScore.find current_user.id
        @user_score = UserScore.new(user_id: current_user.id) if @user_score.nil?
        @user_score.update_user_score('success') if @user_score.present?
        flash[:success] = 'Saved' if @user_score.save
      end
    else
      @user_score = UserScore.find_by_user_id current_user.id
      @user_score = UserScore.new(user_id: current_user.id) if @user_score.nil?
      @user_score.update_user_score('fail') unless @user_score.nil?
      @user_score.save
    end
  end

  private

  def user_params
    params.permit(:question_id, options: [])
  end

  def question_id_params
    params.delete(:question_id)
  end

  def selected_options_params
   selected_options = params.delete(:options)
   selected_options.map(&:to_i)
  end

end
