import { BaseMiddleware } from './base';
import { errorService, tokenService } from '@/services';
import * as express from 'express';
import { Request, Response } from '@/routers/base';
export class AuthMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction) {
    let token = req.header('authorization');
    if (token && token.startsWith('Bearer ')) {
      token = token.slice(7);
    }
    console.log('token', token);
    try {
      // Kiểm tra xem token có tồn tại hay không
      if (!token) {
        console.log('Chưa có Token');
        next(errorService.auth.tokenMissing());
      }

      // Kiểm tra và so sánh thời gian
      const data = await tokenService.verifyToken(token);
      // TODO Check expired by exp in data -> next()
      console.log('aaaa', data);
      const currentTimestamp = new Date();
      if (data.exp && new Date(data.exp) > currentTimestamp) {
        console.log('Token chưa hết hạn');
        next();
      } else {
        console.log('Token đã hết hạn');
        throw errorService.auth.tokenExpired();
      }
    } catch (error) {
      throw errorService.auth.tokenInvalid();
    }
  }
}
