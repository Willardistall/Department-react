require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get api_comments_new_url
    assert_response :success
  end

end
