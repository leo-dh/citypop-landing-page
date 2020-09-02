import express, { Request, Response, NextFunction } from "express";
import { asyncWrapper } from "../utils/helpers";

const frontendRoutes = express.Router();

frontendRoutes.get(
  "/",
  asyncWrapper((req: Request, res: Response, next: NextFunction) => {
    res.sendFile("index.html");
  })
);

export default frontendRoutes;
