import * as _ from 'lodash';
import * as express from 'express';
import { BaseRouter, Request, Response } from '../base';
import { userController } from '@/controllers';

export default class AuthRouter extends BaseRouter {
  router: express.Router;
  constructor() {
    super();
    this.router = express.Router();
    this.router.post('/login', this.route(this.login));

    // TODO define router like login
    this.router.post('/register', this.route(this.register));
  }

  // TODO: define function register
  async login(req: Request, res: Response) {
    const result = await userController.login(req.body);

    this.onSuccess(res, result);
  }
  async register(req: Request, res: Response) {
    console.log(req.body);
    const result = await userController.register(req.body);

    this.onSuccess(res, result);
  }
}
