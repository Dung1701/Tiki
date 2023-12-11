import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';

import { payments } from '@/models/tables';

import { sequelize } from '@/models';

export class PaymentServive extends CrudService<typeof payments> {
  constructor() {
    super(payments);
  }
}
