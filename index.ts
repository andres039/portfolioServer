import express, { Express } from "express";
import dotenv from "dotenv";
import router from "./routers/about";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const allowedOrigins = ["http://localhost:3000", "https://www.andresbeltran.dev"];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

app.use(
  "/api",
  cors({
    origin: allowedOrigins,
  }),
  router
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
