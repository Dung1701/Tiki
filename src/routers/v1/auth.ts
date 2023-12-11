import * as _ from 'lodash';
import * as express from 'express';
import { BaseRouter, Request, Response } from '../base';
import { userController } from '@/controllers';

export default class AuthRouter extends BaseRouter {
  router: express.Router;
  constructor() {
    super();
    this.router = express.Router();
  }

  customRouting() {
    this.router.post('/login', this.route(this.login));
  }

  async login(req: Request, res: Response) {
    const result = await userController.login(req.body);

    this.onSuccess(res, result);
  }
}
