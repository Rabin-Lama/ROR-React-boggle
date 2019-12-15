class GameController < ApplicationController
  def index; end

  def generate_board_letters
    board_letters = helpers.generate_board_letters

    render json: {
      data: board_letters
    }
  end

  def submit_word
    word_in_board = helpers.check_word_in_board
    return false unless word_in_board

    result = helpers.check_word

    render json: {
      submitted_word: params[:word],
      result: result,
      test_res: word_in_board
    }
  end
end
