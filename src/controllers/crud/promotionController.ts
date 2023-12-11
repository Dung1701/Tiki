import { promotionService } from '@/services';
import { CrudController } from '@/controllers';
import { ICrudOption } from '@/interfaces';

export class PromotionController extends CrudController<typeof promotionService> {
  constructor() {
    super(promotionService);
  }
}
