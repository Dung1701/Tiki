import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';

import { paymentreviews } from '@/models/tables';

import { sequelize } from '@/models';

export class PaymentReviewService extends CrudService<typeof paymentreviews> {
  constructor() {
    super(paymentreviews);
  }
}
