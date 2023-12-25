import { subcategoriesController } from '@/controllers';
import * as _ from 'lodash';
// import { Request, Response } from '../base'
import { CrudRouter } from '../crud';

export default class SubCategoriesRouter extends CrudRouter<typeof subcategoriesController> {
  constructor() {
    super(subcategoriesController);
  }
}
