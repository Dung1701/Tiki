import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';

import { categoris } from '@/models/tables';

import { sequelize } from '@/models';

export class CategorisService extends CrudService<typeof categoris> {
  constructor() {
    super(categoris);
  }
}
