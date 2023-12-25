import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';

import { subcategories } from '@/models/tables/subcategories';

import { sequelize } from '@/models';

export class SubCategoriesService extends CrudService<typeof subcategories> {
  constructor() {
    super(subcategories);
  }
}
