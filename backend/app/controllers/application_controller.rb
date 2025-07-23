class ApplicationController < ActionController::Base
  # Only rescue Mongoid validation errors
  rescue_from Mongoid::Errors::Validations do |exception|
    render json: { error: exception.document.errors.full_messages.join(", ") }, status: :unprocessable_entity
  end

  def csrf
    render json: { csrfToken: form_authenticity_token }
  end
end
