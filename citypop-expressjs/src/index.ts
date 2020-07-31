import app from "./app";
import http from "http";
import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/citypop";
const MONGO_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(PORT);
server.on("listening", () => {
  console.info(`Listening on port ${PORT}`);
  mongoose.connect(MONGO_URI, MONGO_OPTIONS);
  mongoose.connection.on("open", () => {
    console.info("Connected to MongoDB");
  });
  mongoose.connection.on("error", (err: Error) => {
    console.error(err);
  });
});
