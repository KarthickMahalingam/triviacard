require 'test_helper'

class ChallengeControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get challenge_show_url
    assert_response :success
  end

end
