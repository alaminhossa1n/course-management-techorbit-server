import dotenv from "dotenv";
dotenv.config();
import { connectToDatabase } from "./db/connect";
import "./server";

connectToDatabase()
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Connected to MongoDB ✅");
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
