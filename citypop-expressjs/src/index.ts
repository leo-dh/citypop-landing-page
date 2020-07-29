import express, { Request, Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  console.log("Received");
  res.send("From API");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
