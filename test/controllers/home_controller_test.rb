require 'test_helper'

class HomeControllerTest < ActionDispatch::IntegrationTest
  test "should get landing" do
    get "/"
    assert_response :success
  end
end
