# Blogify API

Blogify is a simple Express-based REST API for managing blog posts. It uses a modular architecture with separate routers, controllers, and middleware.

## Features

- CRUD operations for posts
- JSON request body parsing
- CORS and Helmet security middleware
- Basic error handling
- Health check endpoint
- In-memory post storage for easy local testing

## Requirements

- Node.js 18+ recommended
- npm

## Install

```bash
npm install
```

## Run

Start the server:

```bash
npm start
```

Start in development mode with live reload:

```bash
npm run dev
```

The server listens on the port defined in `PORT` or defaults to `3000`.

## Environment

Create a `.env` file at the project root if you want to set a custom port:

```bash
PORT=4000
```

## Endpoints

Base URL: `http://localhost:3000/api/v1`

### Health check

- `GET /`

Response:

```json
{
  "success": true,
  "message": "Blogify API - Module 2 Architecture"
}
```

### Posts

- `GET /api/v1/posts` - Get all posts
- `GET /api/v1/posts/:id` - Get a single post by ID
- `POST /api/v1/posts` - Create a new post
- `PUT /api/v1/posts/:id` - Update an existing post
- `DELETE /api/v1/posts/:id` - Delete a post

### Create post body

```json
{
  "title": "My Post Title",
  "content": "Post content goes here.",
  "author": "Author Name"
}
```

- `title` and `content` are required
- `author` is optional and defaults to `Anonymous`

## Notes

- Data is stored in memory, so it resets when the server restarts.
- This project is a good starting point for adding persistence with a database.

## Project structure

- `index.js` - application entry point
- `routes/` - route definitions
- `controllers/` - request handlers and business logic
- `middleware/` - custom middleware

## License

This project is licensed under ISC.
