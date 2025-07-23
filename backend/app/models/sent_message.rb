class SentMessage
  include Mongoid::Document
  include Mongoid::Timestamps

  field :body, type: String
  field :sid, type: String
  field :session_id, type: String
  field :from, type: String
end
