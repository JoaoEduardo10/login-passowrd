import { NextFunction, Request, Response } from "express";

export const globalErroMiddleware = async (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : "internal server error";

  return res.status(statusCode).json({ message });
};
