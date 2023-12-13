import { orderController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class OrderRouter extends CrudRouter<typeof orderController> {
  constructor() {
    super(orderController);
  }
}
