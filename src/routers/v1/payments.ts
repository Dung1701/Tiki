import { paymentController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class PaymentRouter extends CrudRouter<typeof paymentController> {
  constructor() {
    super(paymentController);
  }
  customRouting() {}
}
