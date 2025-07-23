Rails.application.routes.draw do
  get "users/current", to: "users#current"
  get "csrf", to: "application#csrf"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  post "twilio/proxy", to: "twilio#proxy"
  post "twilio/send_sms", to: "twilio#send_sms"
  get "twilio/sent_messages", to: "twilio#sent_messages"

  # Defines the root path route ("/")
  # root "posts#index"
end
