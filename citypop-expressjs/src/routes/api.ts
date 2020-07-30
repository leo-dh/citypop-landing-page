import express, { Request, Response, NextFunction } from "express";

const apiRoutes = express.Router();

apiRoutes.get("/albums", (req: Request, res: Response, next: NextFunction) => {
  res.send("From API");
});

export default apiRoutes;
