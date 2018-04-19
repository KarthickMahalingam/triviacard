class QuestionSetter
  def initialize(question)
    @question = question
  end

  def create_from_params(params)
    @choice_ids = @question.choice_ids
    params.each do |ans|
      @choice = @question.choices.find @choice_ids[ans.to_i]
      @choice.answers.create(question_id: @choice.question_id)
    end
  end
end