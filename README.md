# Expressql REST Backend Template

A production-ready Express + TypeScript REST API template generated using the `expressql` CLI. Feature-first architecture, clean routing, and ready-to-run out of the box.

## CLI — `expressql`

This repository includes a CLI binary entry named `expressql` (see the `bin/expressql` file and the `bin` field in `package.json`). You can run the CLI via `npx` (no install) or install it locally/globally when developing.

Usage examples:

- Using `npx` (recommended):

```bash
npx expressql init <your-backend-name>
# example
npx expressql init backend
```

- Install CLI locally from this checkout (for testing the CLI):

```bash
npm install -g .
expressql init backend
```

After running the `init` command the CLI will create a new project folder with the template code. Then:

```bash
cd backend
npm install
npm run dev
```

The generated template usually exposes the HTTP API at `http://localhost:5000/api/v1` (check `process.env.port` in your environment).

## Example REST endpoints

- GET `/api/v1/users` — list users
- GET `/api/v1/users/:id` — get user by id
- POST `/api/v1/users` — create user (JSON body: `{ "name": "...", "email": "..." }`)
- DELETE `/api/v1/users/:id` — delete user

## Postman / cURL examples

Fetch users (curl):

```bash
curl -X GET http://localhost:5000/api/v1/users
```

Create user (Postman body raw JSON):

POST http://localhost:5000/api/v1/users
Headers: Content-Type: application/json

Body:

```json
{ "name": "Charlie", "email": "charlie@example.com" }
```

Delete user (curl):

```bash
curl -X DELETE http://localhost:5000/api/v1/users/1
```

## Notes

- This template uses an in-memory array for demo purposes (`src/template/base/src/modules/test/user.data.ts`). Data is not persisted between runs.
- The CLI binary is defined in `package.json` under the `bin` field as `expressql` → `bin/expressql`.

## Generated Project Structure

When you run `npx expressql init <name>` the CLI creates a project with the following structure (example):

```
<project-name>/
├─ package.json
├─ prisma.config.ts
├─ tsconfig.json
├─ README.md
├─ src/
│  ├─ index.ts
│  ├─ server.ts
│  ├─ config/
│  │  └─ env.ts
│  ├─ helpers/
│  │  ├─ apiFormater.ts
│  │  └─ logger.ts
│  ├─ lib/
│  │  └─ prisma.ts
│  ├─ modules/
│  │  └─ test/
│  │     ├─ type.ts
│  │     ├─ user.data.ts
│  │     ├─ user.query.ts
│  │     └─ user.mutation.ts
│  └─ shared/
│     └─ test.ts
└─ prisma/
	├─ schema.prisma
	└─ migrations/
```

This is a minimal example; the exact files and folders can vary slightly depending on template options and future versions of the CLI.
