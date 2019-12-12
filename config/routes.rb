Rails.application.routes.draw do
  root 'game#index'
  get 'get_board_letters', to: 'game#generate_board_letters'
end
