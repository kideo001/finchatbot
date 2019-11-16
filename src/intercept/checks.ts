import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkQuestionParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.question) {
    throw new HTTP400Error("Missing question parameter");
  } else {
    next();
  }
};