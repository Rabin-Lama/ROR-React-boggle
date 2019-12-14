module GameHelper
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
end
