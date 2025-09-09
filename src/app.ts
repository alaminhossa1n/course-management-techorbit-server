import express, { Application, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { userRouter } from "./App/Modules/User/user.route";
import globalErrorHandler from "./App/Middleware/globalErrorHandler";
import { courseRouter } from "./App/Modules/Course/course.route";
import { purchaseRouter } from "./App/Modules/Purchase/purchase.route";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/purchase", purchaseRouter);

// Global Error Handler
app.use(globalErrorHandler);

export default app;
