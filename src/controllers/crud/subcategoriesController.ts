import { subcategoriesService } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class SubCategoriesController extends CrudController<typeof subcategoriesService> {
  constructor() {
    super(subcategoriesService);
  }
}
