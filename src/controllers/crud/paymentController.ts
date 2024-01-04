import { paymentServire } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';
import { ProductServive } from '@/services/crud/productService';
import { products } from '@/models';

export class PaymentController extends CrudController<typeof paymentServire> {
  constructor() {
    super(paymentServire);
  }
}
