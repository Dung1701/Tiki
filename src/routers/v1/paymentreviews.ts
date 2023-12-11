import { reviewController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class ReviewRouter extends CrudRouter<typeof reviewController> {
  constructor() {
    super(reviewController);
  }
  customRouting() {}
}
