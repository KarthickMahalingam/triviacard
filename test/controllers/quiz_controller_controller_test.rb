require 'test_helper'

class QuizControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get quiz_controller_create_url
    assert_response :success
  end

end
