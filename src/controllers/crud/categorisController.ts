import { categorisService } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class CategorisController extends CrudController<typeof categorisService> {
  constructor() {
    super(categorisService);
  }
}
