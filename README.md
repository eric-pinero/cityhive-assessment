# CityHive Assessment Project

This project is a full-stack web application with a Rails backend and an Angular frontend.

## Table of Contents
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Backend (Rails)](#running-the-backend-rails)
- [Running the Frontend (Angular)](#running-the-frontend-angular)
- [Environment Variables](#environment-variables)
- [Development Tips](#development-tips)
- [Troubleshooting](#troubleshooting)

---

## Project Structure

```
cityhive-assessment/
  backend/      # Ruby on Rails
  frontend/     # Angular SPA
```

---

## Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Ruby](https://www.ruby-lang.org/) (v3.1+ recommended)
- [Bundler](https://bundler.io/) (`gem install bundler`)
- [MongoDB](https://www.mongodb.com/) (running locally or accessible remotely)

---

## Setup

### 1. Clone the repository
```sh
git clone https://github.com/eric-pinero/cityhive-assessment.git
cd cityhive-assessment
```

### 2. Backend Setup (Rails)
```sh
cd backend
bundle install
# Copy and edit credentials if needed
cp config/mongoid.yml.example config/mongoid.yml
# Set up environment variables (see below)
```

### 3. Frontend Setup (Angular)
```sh
cd ../frontend
npm install
```

---

## Running the Backend (Rails)

1. **Start MongoDB** (if not already running):
   ```sh
   mongod
   ```
2. **Start the Rails server:**
   ```sh
   cd backend
   rails server
   ```
   The backend will run on [http://localhost:3000](http://localhost:3000) by default.

---

## Running the Frontend (Angular)

1. **Start the Angular dev server:**
   ```sh
   cd frontend
   npm start
   ```
   The frontend will run on [http://localhost:4200](http://localhost:4200) by default.

---

## Environment Variables

- **Backend:**
  - Set up your Rails credentials for Twilio and MongoDB in `config/credentials.yml.enc` or as environment variables.
  - Example:
    - `TWILIO_ACCOUNT_SID=...`
    - `TWILIO_AUTH_TOKEN=...`
    - `MONGODB_URI=...`

- **Frontend:**
  - No special environment variables required for local development.

---

## Development Tips
- **API Proxy:** The frontend is configured to proxy API requests to the backend during development (see `frontend/proxy.conf.json`).
- **Hot Reloading:** Both frontend and backend support hot reloading for rapid development.

---

## Troubleshooting
- **MongoDB connection errors:** Ensure MongoDB is running and accessible.
- **Port conflicts:** Make sure nothing else is running on ports 3000 (backend) or 4200 (frontend).
- **CORS issues:** The backend is configured for local development; adjust CORS settings in production as needed.
- **Twilio errors:** Ensure your Twilio credentials are correct and your account is set up to send SMS to the desired numbers.

---

## License

This project is for assessment and demonstration purposes. 