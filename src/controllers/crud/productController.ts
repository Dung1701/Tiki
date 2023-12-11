import { productService } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class ProductController extends CrudController<typeof productService> {
  constructor() {
    super(productService);
  }
}
