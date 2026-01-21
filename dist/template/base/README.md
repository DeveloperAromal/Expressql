# Template: Express REST Service

This folder is the base template used by `expressql` when generating a new backend project.

Quick start — what to do after the CLI creates a project

1. Change into the generated project directory:

```bash
cd <your-project-name>
```

2. Install dependencies:

```bash
npm install
```

3. Create or copy environment variables (optional):

```bash
# copy template .env if present
cp .env.example .env
# then edit .env to set PORT or other vars
```

4. Run in development (hot-reload depending on template):

```bash
npm run dev
```

5. Build and run (production):

```bash
npm run build
npm start
```

Default API base (example):

```
http://localhost:<PORT>/api/v1
```

Example REST endpoints included in the template

- GET `/api/v1/users` — list users
- GET `/api/v1/users/:id` — get user by id
- POST `/api/v1/users` — create user (JSON body: `{ "name": "...", "email": "..." }`)
- DELETE `/api/v1/users/:id` — delete user

Postman / cURL examples

Fetch users:

```bash
curl -X GET http://localhost:5000/api/v1/users
```

Create user (JSON body):

POST http://localhost:5000/api/v1/users
Headers: `Content-Type: application/json`

Body example:

```json
{ "name": "Charlie", "email": "charlie@example.com" }
```

Delete user:

```bash
curl -X DELETE http://localhost:5000/api/v1/users/1
```

Notes and tips

- The template uses an in-memory array for demo data (`src/modules/test/user.data.ts`) — data will not persist between runs.
- If you want to change the port use the `PORT` or `port` environment variable depending on the template's config (`process.env.port` is used in some template files).
- To integrate this template into a larger project, move the module files under `src/modules` into your app router structure and replace the in-memory store with a database implementation.

If you want, I can add a short troubleshooting section or a sample `.env.example` file next.
