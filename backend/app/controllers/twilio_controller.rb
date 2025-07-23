class TwilioController < ApplicationController
  # GET /twilio/sent_messages
  def sent_messages
    session_id = session.id.to_s
    messages = SentMessage.where(session_id: session_id).order(created_at: :desc)
    render json: messages
  end

  # POST /twilio/send_sms
  def send_sms
    to = params[:phone] || params[:to] || '+18777804236'
    body = params[:body]
    from = params[:from]
    session_id = session.id.to_s
    message = send_message(to: to, from: from, body: body)
    SentMessage.create!(body: body, sid: message.sid, session_id: session_id, from: from)
    render json: { sid: message.sid, status: message.status, to: message.to, from: message.from, body: message.body, session_id: session_id }, status: :ok
  end

  private

  def send_message(to:, from:, body:)
    account_sid = Rails.application.credentials.account_sid
    auth_token = Rails.application.credentials.auth_token
    client = Twilio::REST::Client.new(account_sid, auth_token)
    client.messages.create(
      to: to,
      from: from,
      body: body
    )
  end
end 