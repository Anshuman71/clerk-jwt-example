# Clerk JWT Example

Make sure you have Node.js 16 or above.

## Set up

Create a `.env.local` file with the following credentials.

```bash
DIY_JWT_SECRET=2182312c81187ab82bbe053df6b7aa55
NEXT_PUBLIC_CLERK_FRONTEND_API=<frontend-key-from-Clerk.dev>
CLERK_API_KEY=<backend-api-key-from-Clerk.dev>
CLERK_JWT_KEY=<jwt-verification-key-from-Clerk.dev>
```

## Running locally

1. Run `npm install` to install dependencies.
2. Run `npm run dev` to start the application.
3. Open `http://localhost:3000` in your favorite web browser
