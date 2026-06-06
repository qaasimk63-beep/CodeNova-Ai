# Getting Started with CodeNova AI

## Project Overview

CodeNova AI is a premium AI-powered code generator platform combining:
- Real-time AI code generation using OpenRouter API
- Modern React + TypeScript frontend
- Secure Node.js + Express backend
- MongoDB database with Mongoose
- JWT authentication
- Premium cyberpunk UI design

## Quick Start

### 1. Prerequisites
- Node.js 18+ (`node --version`)
- MongoDB running locally or Atlas (`mongodb://localhost:27017`)
- OpenRouter API key from [openrouter.ai](https://openrouter.ai)

### 2. Backend Setup
```bash
cd backend
npm install

# Create .env file with:
# - PORT=4174
# - MONGODB_URI=mongodb://localhost:27017/codenova-ai
# - JWT_SECRET=your-secret-key
# - OPENROUTER_API_KEY=sk-or-v1-xxx

npm run dev  # Starts on http://localhost:4174
```

### 3. Frontend Setup
```bash
cd frontend
npm install

npm run dev  # Starts on http://localhost:4173
```

### 4. Open Application
- Navigate to http://localhost:4173
- Sign up for a new account
- Start generating code!

## Architecture

### Frontend Stack
- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS with custom animations
- React Router for navigation
- Axios for API calls

### Backend Stack
- Express.js with TypeScript
- MongoDB + Mongoose
- JWT authentication
- Rate limiting & security middleware
- OpenRouter AI integration

## Key Features Implemented

✅ User Authentication (Sign In/Up)
✅ JWT Token Management
✅ AI Code Generation
✅ Generation History
✅ Project Management
✅ Credit System
✅ API Rate Limiting
✅ Error Handling
✅ Premium UI Components
✅ Responsive Design

## API Routes

All API routes are prefixed with `/api`:

**Authentication:**
- POST `/auth/signup` - Create account
- POST `/auth/signin` - Login
- GET `/auth/me` - Current user

**AI Generation:**
- POST `/ai/generate` - Generate code
- GET `/ai/history` - Get history

**Projects:**
- POST `/projects` - Create
- GET `/projects` - List user projects
- GET `/projects/:id` - Get project details
- PATCH `/projects/:id` - Update
- DELETE `/projects/:id` - Delete

## Component Library

### UI Components (in `src/components/`)
- `GlassButton.tsx` - Styled buttons
- `GlassCard.tsx` - Card containers
- `NeonText.tsx` - Glowing text
- `InputField.tsx` - Form inputs
- `CodeHighlighter.tsx` - Code display
- `AnimatedBackground.tsx` - Background animations

## Customization

### Tailwind Configuration
Edit `frontend/tailwind.config.js` to customize:
- Colors and gradients
- Custom animations
- Responsive breakpoints
- Shadow effects

### Backend Configuration
Edit `backend/src/config.ts` to adjust:
- Server port
- Database URI
- JWT settings
- API limits

## Troubleshooting

### Backend won't start
- Check MongoDB is running: `mongosh`
- Verify all env variables are set
- Check port 4174 is not in use

### Frontend build fails
- Delete `node_modules` and `npm install` again
- Clear Vite cache: `rm -rf frontend/.vite`

### API calls failing
- Verify backend is running (`http://localhost:4174/health`)
- Check CORS_ORIGIN in backend .env
- Review browser console for errors

## Next Steps

1. **Configure OpenRouter API** - Add your API key to backend .env
2. **Setup MongoDB** - Use local MongoDB or Atlas
3. **Customize UI** - Edit Tailwind config and components
4. **Add Features** - Extend controllers and add new pages
5. **Deploy** - Use Docker, Railway, or traditional servers

## Support & Resources

- Documentation: Read README.md
- Issues: Check existing issues on GitHub
- Features: Submit feature requests
- Security: Report vulnerabilities to support@codenova.ai

Happy coding! 🚀
