import express from "express";
import cors from "cors";
import bodyparser from "body-parser";
import helmet from "helmet";
import helmetOptions from "./utils/helmetOptions";
import requestLogger from "./middleware/logger";
import apiRoutes from "./routes/api";
import errorHandler from "./middleware/errorHandler";

const app = express();

app.use(helmet(helmetOptions));
app.use(cors());
app.use(bodyparser.json());
app.use(requestLogger);
app.use("/api", apiRoutes);
app.use(errorHandler);

export default app;
