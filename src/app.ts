import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./App/Modules/User/user.route";
import globalErrorHandler from "./App/Middleware/globalErrorHandler";
import { courseRouter } from "./App/Modules/Course/course.route";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use(globalErrorHandler);

export default app;
