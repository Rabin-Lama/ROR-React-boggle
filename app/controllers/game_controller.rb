class GameController < ApplicationController
  def index; end

  def generate_board_letters
    board_letters = helpers.generate_board_letters

    render json: {
      data: board_letters
    }
  end

  def submit_word
    result = helpers.check_word

    render json: {
      submitted_word: params[:word],
      result: result
    }
  end
end
