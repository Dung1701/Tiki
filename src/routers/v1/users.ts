import { userController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';
import { authMiddleware, queryMiddleware } from '@/middlewares';

export default class UserRouter extends CrudRouter<typeof userController> {
  constructor() {
    super(userController);
  }
  customRouting() {
    this.router.get('/', this.getListMiddlewares(), this.route(this.getList));
  }

  getListMiddlewares(): any[] {
    return [authMiddleware.run(), queryMiddleware.run()];
  }
}
