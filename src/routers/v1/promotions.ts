import { promotionController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class PromotionRouter extends CrudRouter<typeof promotionController> {
  constructor() {
    super(promotionController);
  }
  customRouting() {}
}
