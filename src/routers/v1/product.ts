import { productController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class ProductRouter extends CrudRouter<typeof productController> {
  constructor() {
    super(productController);
    this.router.get('/categoris/:categorisid', productController.getByCategoryId);
  }
}
