import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/jwtService';
import { failure } from '../utils/response';

export interface AuthRequest extends Request {
  user: { userId: string; email: string };
}

export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.headers.authorization || req.cookies?.token;
    if (!authorization?.startsWith('Bearer ') && !req.cookies?.token) {
      return res.status(401).json(failure('Authorization header missing'));
    }

    const token = authorization
      ? authorization.split(' ')[1]
      : req.cookies?.token;
    
    const payload = verifyToken(token);
    (req as AuthRequest).user = payload;
    next();
  } catch (error) {
    return res.status(401).json(failure('Invalid or expired token'));
  }
};
