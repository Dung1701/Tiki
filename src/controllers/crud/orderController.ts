import { orderService } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class OrderController extends CrudController<typeof orderService> {
  constructor() {
    super(orderService);
  }
}
