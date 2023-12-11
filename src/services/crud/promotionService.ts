import { CrudService } from '../crudService.pg';

import { promotions } from '@/models/tables';

export class PromotionService extends CrudService<typeof promotions> {
  constructor() {
    super(promotions);
  }
}
