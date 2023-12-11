Rails.application.routes.draw do
  resources :posts
  post "posts/close"=>"posts#close" , as: :modalClose
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "posts#index"
end
