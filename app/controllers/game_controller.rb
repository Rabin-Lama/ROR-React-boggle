class GameController < ApplicationController
  def index; end

  def generate_board_letters
    vowels = %w[a e i o u]
    consonants = %w[b c d f g h j k l m n p q r s t v w x y z]
    board_letters = []

    # inserting 6 vowels for a game
    6.times do
      board_letters.push(vowels[rand(vowels.length)])
    end

    # inserting 10 consonants for a game
    10.times do
      board_letters.push(consonants[rand(consonants.length)])
    end

    # shuffling because vowels and consonants were linearly appended
    board_letters = board_letters.shuffle!
    render json: {
      data: board_letters
    }
  end
end
