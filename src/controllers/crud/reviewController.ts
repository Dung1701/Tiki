import { paymentreviewServire } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class PaymentReviewController extends CrudController<typeof paymentreviewServire> {
  constructor() {
    super(paymentreviewServire);
  }
}
