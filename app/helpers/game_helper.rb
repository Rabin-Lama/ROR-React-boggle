module GameHelper
  def generate_board_letters
    vowels = %w[a e i o u]
    consonants = %w[b c d f g h j k l m n p q r s t v w x y z]
    board_size = 4
    total_letters = board_size ** 2
    # maintain a good vowels:consonants ratio
    total_vowels = (total_letters * 0.4).ceil
    total_consonants = total_letters - total_vowels
    board_letters = []
    board_row = []

    # we will implement a matrix like structure for our letters array
    # [[1, 2, 3, 4]
    #  [1, 2, 3, 4]
    #  [1, 2, 3, 4]
    #  [1, 2, 3, 4]]
    total_vowels.times do
      board_row.push(vowels[rand(vowels.length)])

      if board_row.count == board_size
        board_letters.push(board_row)
        board_row = []
      end
    end

    total_consonants.times do
      board_row.push(consonants[rand(consonants.length)])

      if board_row.count == board_size
        board_letters.push(board_row)
        board_row = []
      end
    end

    # shuffling because vowels and consonants were appended sequentially
    board_letters.shuffle!
  end

  def check_word
    word = params[:word]

    app_id = 'b0d3c2de'
    app_key = '4f15f3a8d5425fc7ca492e9cc4e5edb8'
    lang = 'en-gb'
    word_id = word
    fields = 'definitions'
    strict_match = 'false'

    url = 'https://od-api.oxforddictionaries.com:443/api/v2/entries/'
    url += lang + '/' + word_id + '?fields=' + fields + '&strictMatch=' + strict_match
    headers = {
      app_id: app_id,
      app_key: app_key
    }
    request = HTTParty.get(url, headers: headers)
    request.success? ? word : ''
  end

  def check_word_in_board
    require 'set'

    board_letters = params[:board_letters]
    row_size = board_letters.count
    submitted_word = params[:word]
    letters_of_submitted_word = params[:word].split('')
    directions = {
      up: [-1, 0],
      up_right: [-1, 1],
      right: [0, 1],
      down_right: [1, 1],
      down: [1, 0],
      down_left: [1, -1],
      left: [0, -1],
      up_left: [-1, -1]
    }

    occurences_of_first_letter = get_indices(board_letters, letters_of_submitted_word[0])

    # no point in continuing if the first letter is not found
    return false unless occurences_of_first_letter.any?

    possible_words = Set.new

    occurences_of_first_letter.each do |val|
      directions.each do |key2, val2|
        joined_letters = ''
        limit = row_size
        cursor = {
          row: val[:row],
          col: val[:col]
        }

        until limit.zero?
          begin
            joined_letters += board_letters[cursor[:row]][cursor[:col]]
            cursor[:row] += val2[0]
            cursor[:col] += val2[1]
            return true if joined_letters.include? submitted_word

            break if cursor[:row].negative? || cursor[:col].negative?
          rescue StandardError => e
            puts "Rescued: #{e.inspect}"
            break
          end
          limit -= 1
        end
        possible_words.add(joined_letters) unless joined_letters.strip.empty?
      end
    end
    false
  end

  def get_indices(haystack, needle)
    matches = []

    haystack.each_with_index do |val, row_index|
      val.each_with_index do |val2, col_index|
        next unless needle == val2

        matches.push(
          row: row_index,
          col: col_index
        )
      end
    end

    matches
  end
end
