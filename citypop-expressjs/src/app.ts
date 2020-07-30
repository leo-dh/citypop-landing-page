import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import requestLogger from "./middleware/logger";
import apiRoutes from "./routes/api";

const app = express();

app.use(cors());
app.use(bodyparser.json());
app.use(requestLogger);
app.use("/api", apiRoutes);

export default app;
