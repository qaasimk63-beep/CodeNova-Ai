# Deployment Guide for CodeNova AI

This project is now configured for production deployment.

## Local publishing with Docker

You can run the full stack locally with Docker Compose:

```bash
npm install

docker-compose up --build
```

Then open:

- Frontend: http://localhost:4173
- Backend: http://localhost:4174

## Production deployment options

### Option 1: Railway

1. Push this repository to GitHub.
2. Create a Railway project.
3. Connect your GitHub repo.
4. Add environment variables in Railway:
   - `PORT=4174`
   - `MONGODB_URI` (your MongoDB connection string)
   - `JWT_SECRET`
   - `OPENROUTER_API_KEY`
   - `CORS_ORIGIN=https://<your-frontend-domain>`
5. Deploy the backend service.
6. Deploy the frontend using a static host, or serve it from the same domain.

### Option 2: Vercel

1. Push this repository to GitHub.
2. Create a Vercel project and connect the repo.
3. Configure the frontend as the `frontend/` directory.
4. Set `VITE_API_URL` to your backend URL.
5. Deploy the backend separately on Railway, Render, or a Docker host.

### Option 3: Docker host

Use the `docker-compose.yml` in the root to run the full stack with MongoDB.

## Notes

- The frontend now supports `VITE_API_URL` for production API routing.
- The backend Dockerfile builds the TypeScript server and serves it on port `4174`.
- The `docker-compose.yml` includes MongoDB for local development.

## Live URL

I can’t create an external live URL directly from this local workspace, but once you deploy to a host like Railway or Vercel, you will receive a public URL for your app.
