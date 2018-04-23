Rails.application.routes.draw do
  get 'dashboard/index'
  get 'challenge/show'
  post 'challenge/create'
  post 'challenge/index'
  get 'quiz/new'
  post 'quiz/create'
  authenticated :user do
    root 'dashboard#index', as: :authenticated
  end
  root 'home#index'
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
end
