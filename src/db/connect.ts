import mongoose from "mongoose";

export async function connectToDatabase(): Promise<void> {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("MONGO_URI is not set");
  }

  await mongoose.connect(mongoUri);
}
