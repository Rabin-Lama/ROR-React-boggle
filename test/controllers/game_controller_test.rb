require 'test_helper'

class GameControllerTest < ActionController::TestCase
  test 'should get index' do
    get :index
    assert_response :success
  end

  test 'should return 4x4 matrix array' do
    get :generate_board_letters
    json = JSON.parse(response.body)
    assert json['data'].instance_of? Array
    assert json['data'].count == 4
    assert json['data'].flatten.count == 16
  end

  test 'validate word' do
    bl = [
      %w[h c t b],
      %w[k p t s],
      %w[a e u y],
      %w[g a m e]
    ]
    # 'apt' should be found in the above board
    post :submit_word, params: { board_letters: bl, word: 'apt' }, as: :json
    json = JSON.parse(response.body)
    assert json['result'] == 'apt'

    # 'game' should be found in the above board
    post :submit_word, params: { board_letters: bl, word: 'game' }, as: :json
    json = JSON.parse(response.body)
    assert json['result'] == 'game'

    # 'test' should not be found in the above board
    post :submit_word, params: { board_letters: bl, word: 'test' }, as: :json
    json = JSON.parse(response.body)
    assert json['result'] == ''
  end
end
