import { Request, Response, NextFunction } from 'express';
import { failure } from '../utils/response';

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }

  const message = err instanceof Error ? err.message : 'Internal server error';
  res.status(500).json(failure(message));
};
