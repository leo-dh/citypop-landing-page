import app from "./app";
import mongoose from "mongoose";
import { PORT, HOSTNAME, MONGODB_ATLAS_URI } from "./utils/config";

const MONGO_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const server = app.listen(PORT, HOSTNAME);
server.on("listening", () => {
  console.info(`Listening on port ${PORT}`);
  mongoose.connect(MONGODB_ATLAS_URI, MONGO_OPTIONS);
  mongoose.connection.on("open", () => {
    console.info("Connected to MongoDB Atlas");
  });
  mongoose.connection.on("error", (err: Error) => {
    console.error(err);
  });
});
