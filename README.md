# Course Management API (Express + TypeScript + Mongoose)

### Prerequisites

- Node.js 18+
- MongoDB local instance or cloud URI

### Setup

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with:

```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/techorbit_db
```

3. Start the dev server:

```bash
npm run dev
```

Then visit `http://localhost:4000/health`.

### Scripts

- `npm run dev` - Start in watch mode (ts-node-dev)
- `npm run build` - Compile TypeScript to `dist`
- `npm start` - Run compiled code from `dist`

### Endpoint

- `GET /health` → `{ "status": "ok" }`

### Project Structure

- `src/index.ts` loads env, connects to MongoDB
- `src/app.ts` defines the Express app and middleware
- `src/server.ts` creates the HTTP server and listens on `PORT`
- `src/db/connect.ts` handles the Mongoose connection
# course-management-techorbit-server
