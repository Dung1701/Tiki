import { CrudService } from '../crudService.pg';

import { Users } from '@/models/tables';

export class UserService extends CrudService<typeof Users> {
  constructor() {
    super(Users);
  }
}
