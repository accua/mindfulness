Rails.application.routes.draw do
  scope '/api' do
    resources :entries do
      resources :feelings, only: %i[new create]
      post 'user_token' => 'user_token#create'
    end
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
