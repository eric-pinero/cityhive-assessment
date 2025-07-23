# For local development with frontend and backend on different ports, allow cookies with SameSite=Lax and not Secure
Rails.application.config.session_store :cookie_store, key: '_cityhive_assessment_session', same_site: :lax, secure: false

# In production, use:
# Rails.application.config.session_store :cookie_store, key: '_cityhive_assessment_session', same_site: :none, secure: true
