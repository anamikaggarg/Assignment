# Internship Assignment – Backend Developer

## Tech Stack
- Node.js, Express.js
- MongoDB, Mongoose
- JWT Authentication
- React.js
- Axios

## Features
- User registration & login with JWT authentication
- Role-based access (user/admin)
- CRUD APIs for tasks
- Protected routes using JWT
- Basic frontend UI to interact with APIs

## Project Structure
- backend/ – REST APIs, authentication, database
- frontend/ – React UI

## Setup Instructions

### Backend
1. cd backend
2. npm install
3. Create .env file:
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/assignment
   JWT_SECRET=secret123

4. npx nodemon server.js

### Frontend
1. cd frontend/assignment
2. npm install
3. npm start

## API Endpoints
- POST /api/auth/register
- POST /api/auth/login
- GET /api/tasks
- POST /api/tasks
- DELETE /api/tasks/:id

## Scalability Note
Stateless JWT-based APIs allow horizontal scaling and easy extension to microservices.