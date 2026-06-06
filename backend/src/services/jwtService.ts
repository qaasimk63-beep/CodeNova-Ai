import jwt from 'jsonwebtoken';
import { env } from '../config';

export interface TokenPayload {
  userId: string;
  email: string;
}

export const generateTokens = (payload: TokenPayload) => {
  const accessToken = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: '7d',
  });

  const refreshToken = jwt.sign(payload, env.JWT_SECRET, {
    expiresIn: '30d',
  });

  return { accessToken, refreshToken };
};

export const verifyToken = (token: string): TokenPayload => {
  const decoded = jwt.verify(token, env.JWT_SECRET) as TokenPayload;
  return decoded;
};

export const decodeToken = (token: string): TokenPayload | null => {
  try {
    const decoded = jwt.decode(token) as TokenPayload;
    return decoded;
  } catch {
    return null;
  }
};
