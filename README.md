# Field Notes

Field Notes is a creative strategy portfolio and editorial breakdown library built with Next.js. It combines statically authored strategy studies with a small PostgreSQL-backed inquiry form.

## Stack

- Next.js 16 App Router and React 19
- TypeScript
- Tailwind CSS 4
- PostgreSQL
- Drizzle ORM and Drizzle Kit

## Local setup

Requirements:

- Node.js 22 or newer
- npm
- PostgreSQL

Install dependencies:

```bash
npm install
```

Copy the environment template and enter a valid PostgreSQL connection string:

```bash
cp .env.example .env.local
```

On PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Apply the committed database migrations, then start the development server:

```bash
npm run db:migrate
npm run dev
```

The site is available at `http://localhost:3000`.

## Environment

`DATABASE_URL` is required by the inquiry API, health endpoint, and migration commands. It must be a PostgreSQL connection string:

```text
postgresql://USER:PASSWORD@HOST:5432/DATABASE
```

Next.js and the database scripts load `.env.local`. In deployed environments, set `DATABASE_URL` through the hosting platform rather than committing an environment file.

## Database workflow

The schema is defined in `src/db/schema.ts`. Generated SQL migrations and their metadata are committed under `drizzle/`.

After changing the schema, generate a migration:

```bash
npm run db:generate
```

Review the generated SQL, then apply all pending migrations:

```bash
npm run db:migrate
```

`db:generate` does not contact the database. `db:migrate` uses `DATABASE_URL` and changes the configured database, so verify the target environment before running it.

## Development commands

```bash
npm run dev          # Start the development server
npm run lint         # Run ESLint
npm run typecheck    # Run TypeScript without emitting files
npm run build        # Create a production build
npm run start        # Serve a completed production build
npm run db:generate  # Generate SQL from schema changes
npm run db:migrate   # Apply pending SQL migrations
```

## Architecture

```text
src/
├── app/
│   ├── page.tsx                 Home page
│   ├── about/                   About page
│   ├── work-with-me/            Services and inquiry form
│   ├── breakdowns/              Library and generated article routes
│   └── api/
│       ├── inquiries/           Inquiry submission endpoint
│       └── health/              Database health check
├── components/                  Shared UI and editorial block renderers
├── db/                          Drizzle client and PostgreSQL schema
└── lib/breakdowns/
    ├── data/                    Statically authored breakdowns
    ├── types.ts                 Typed editorial content model
    └── index.ts                 Catalog, summaries, and relationships
```

Pages and article bodies render on the server. The header, inquiry form, and library search/filter interface are client components. The library client receives only `BreakdownSummary` records; full article sections remain server-side and are rendered by the dynamic breakdown route.

Breakdown content is currently file-backed. To add an article, create a typed entry in `src/lib/breakdowns/data/`, then register it in `src/lib/breakdowns/index.ts`. The shared route and block renderer provide the existing eight-section editorial structure.

The database currently stores only inquiries. `POST /api/inquiries` validates and inserts form submissions, while `GET /api/health` verifies database connectivity.

## Production checks

Before deployment, run:

```bash
npm run lint
npm run typecheck
npm run build
```

Provision PostgreSQL, set `DATABASE_URL` in the deployment environment, and run `npm run db:migrate` against that database before accepting inquiries.
