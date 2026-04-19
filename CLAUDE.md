# [Your Project Name]

## Overview

<!-- Describe your project in 2-3 sentences. What does it do? Who is it for? -->

## Tech Stack

- **Frontend:** React 19, Tailwind CSS, React Router v7
- **Backend:** Hono (TypeScript), Zod validation
- **Database:** PostgreSQL via Prisma ORM
- **Testing:** Vitest (unit/integration), Playwright (E2E)
- **Deployment:** [Vercel / Railway / etc.]

## Project Structure

```
src/
├── client/          # React frontend
│   ├── components/  # Reusable UI components
│   ├── pages/       # Route-level page components
│   ├── hooks/       # Custom React hooks
│   └── lib/         # Client utilities
├── server/          # Hono API backend
│   ├── routes/      # API route handlers
│   ├── services/    # Business logic
│   ├── middleware/   # Auth, validation, error handling
│   └── lib/         # Server utilities
└── shared/          # Shared types and validation schemas (Zod)
```

## Key Patterns

<!-- Document the important patterns in your codebase so AI tools can follow them -->

- **Validation:** All API inputs validated with Zod schemas in `src/shared/schemas/`
- **Error handling:** Errors use the `AppError` class, caught by global error middleware
- **Auth:** [Describe your auth approach]
- **Database:** Prisma client instantiated in `src/server/lib/db.ts`

## API Endpoints

<!-- List your main API endpoints -->

| Method | Path | Description |
|--------|------|-------------|
| GET | /api/health | Health check |

## Running Locally

```bash
npm install
npm run db:push        # Create database tables
npm run db:seed        # Seed sample data (optional)
npm run dev            # Start dev server (client + API)
```

## Testing

```bash
npm test               # Run unit/integration tests
npm run test:coverage  # Run with coverage report
npm run test:e2e       # Run Playwright E2E tests
```

## Environment Variables

```
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
```
