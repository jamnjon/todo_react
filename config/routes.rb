Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api do
    resources :todos, only: [:index, :create, :show, :destroy, :update]
  end
end
