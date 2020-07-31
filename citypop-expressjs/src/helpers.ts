import { Request, Response, NextFunction, RequestHandler } from "express";

const asyncWrapper = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    fn(req, res, next).catch(next);
  };
};

export { asyncWrapper };
