import { Request, Response, NextFunction } from "express";

const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
  console.info(Date());
  console.info(`${req.method} ${req.originalUrl}`);
  next();
};

export default requestLogger;
