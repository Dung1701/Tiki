import { categorisController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class CategorisRouter extends CrudRouter<typeof categorisController> {
  constructor() {
    super(categorisController);
  }
}
