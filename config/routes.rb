Rails.application.routes.draw do
  post 'user_token' => 'user_token#create'
  scope '/api' do
    resources :entries do
      resources :feelings, only: %i[new create]
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
