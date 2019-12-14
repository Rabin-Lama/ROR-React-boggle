Rails.application.routes.draw do
  get 'validation/index'
  root 'game#index'
  get 'get_board_letters', to: 'game#generate_board_letters'
  post 'submit_word', to: 'game#submit_word'
end
