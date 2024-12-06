import { SignJWT, jwtVerify } from 'jose';
import CryptoJS from 'crypto-js';

const JWT_SECRET = new TextEncoder().encode('your-secret-key');
const TOKEN_EXPIRY = '24h';

export interface User {
  id: string;
  username: string;
}

export const hashPassword = (password: string, salt: string): string => {
  return CryptoJS.PBKDF2(password, salt, {
    keySize: 256 / 32,
    iterations: 100000,
  }).toString();
};

export const createToken = async (user: User): Promise<string> => {
  return new SignJWT({ userId: user.id, username: user.username })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(TOKEN_EXPIRY)
    .sign(JWT_SECRET);
};

export const verifyToken = async (token: string): Promise<User | null> => {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      id: payload.userId as string,
      username: payload.username as string,
    };
  } catch (error) {
    console.error('Token verification failed:', error);
    return null;
  }
};