# CodeNova AI

CodeNova AI is a premium full-stack AI code generation platform built with React, TypeScript, Vite, Tailwind CSS, Node.js, Express, MongoDB, and OpenRouter.

## Features

- AI-powered code generation from prompts
- Multi-language support
- Syntax highlighting and code preview
- Conversation history and saved projects
- JWT authentication, sign up, sign in, and forgot password UI
- Dark/light mode and futuristic neon cyberpunk design
- Secure backend with rate limiting, logging, and structured API routes

## Project Structure

- `frontend/` — React application with Tailwind styling and routing
- `backend/` — Express API server with MongoDB models and OpenRouter integration

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Create environment files:

- `backend/.env`

3. Start both apps:

```bash
npm run dev
```

## Backend Environment Variables

Create `backend/.env` based on `backend/.env.example` and provide:

- `PORT`
- `MONGODB_URI`
- `JWT_SECRET`
- `OPENROUTER_API_KEY`
- `OPENROUTER_MODEL`

## Notes

This scaffold is designed for production-level structure and maintainability with a premium UI/UX foundation for CodeNova AI.
