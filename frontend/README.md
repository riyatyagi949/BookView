# Book Review Platform Backend

## Description
Backend API for the Book Review Platform. Users can register, login, add book reviews, and admins can manage books.

## Features
- User authentication with JWT
- Admin-only book management (add, update, delete)
- Review submission and retrieval by book
- Bonus: Review refinement using OpenAI GPT

## Technologies
- Node.js
- Express
- MongoDB (Mongoose)
- JWT for authentication
- OpenAI API (for review refinement)

## Setup
1. Clone the repo  
2. Run `npm install`  
3. Create a `.env` file with:
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key

4. Run `npm start` to start the server

## API Endpoints

### Books
- GET `/books?page=1` - List books (pagination)
- POST `/books` - Add book (admin only)
- GET `/books/:id` - Get book details
- PUT `/books/:id` - Update book (admin only)
- DELETE `/books/:id` - Delete book (admin only)

### Users
- POST `/users/register` - Register
- POST `/users/login` - Login
- GET `/users/:id` - Get profile (protected)
- PUT `/users/:id` - Update profile (protected)

### Reviews
- GET `/reviews?bookId=book_id` - Get reviews for book
- POST `/reviews` - Submit review (protected)
- POST `/reviews/refine` - Refine review with GPT (protected)



