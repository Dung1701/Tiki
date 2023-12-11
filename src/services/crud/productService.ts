import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';

import { products } from '@/models/tables';

import { sequelize } from '@/models';

export class ProductServive extends CrudService<typeof products> {
  constructor() {
    super(products);
  }
}
