import { errorService } from '@/services';
import * as jwt from 'jwt-simple';
import dotenv from 'dotenv';
// dotenv.config();
const secretKey = process.env.SERVER_SECRET || 'defaultSecretKey';

interface TokenPayload {
  exp: number;
  userId: string;
}
export class TokenService {
  generateToken(payload: TokenPayload): string {
    const exp = new Date();
    exp.setMonth(exp.getMonth() + 1);
    const token = jwt.encode(
      {
        exp,
        payload,
      },
      secretKey,
    );
    return token;
  }
  verifyToken(token: string): TokenPayload | null {
    try {
      const decoded = jwt.decode(token, secretKey) as TokenPayload;
      return decoded;
    } catch (error) {
      console.error(error);
      throw errorService.auth.tokenInvalid();
    }
  }
}
