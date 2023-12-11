import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';

import { Orders } from '@/models/tables';

import { sequelize } from '@/models';

export class OrderService extends CrudService<typeof Orders> {
  constructor() {
    super(Orders);
  }
}
