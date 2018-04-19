Rails.application.routes.draw do
  get 'challenge/show'

  get 'quiz/new'

  get 'dashboard/index'
  authenticated :user do
    root 'dashboard#index', as: :authenticated
  end
  root 'home#index'
  get 'quiz/new'
  post 'quiz/create' => 'quiz#create'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
