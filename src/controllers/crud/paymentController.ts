import { paymentServire } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class PaymentController extends CrudController<typeof paymentServire> {
  constructor() {
    super(paymentServire);
  }
}
