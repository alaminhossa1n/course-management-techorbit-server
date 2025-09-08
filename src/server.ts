import http from "http";
import app from "./app";

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const server = http.createServer(app);

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on http://localhost:${port}`);
});
