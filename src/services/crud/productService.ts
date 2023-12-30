import { CrudService } from '../crudService.pg';
import { ICrudOption } from '@/interfaces';
import { products } from '@/models/tables';
import { sequelize } from '@/models';

export class ProductServive extends CrudService<typeof products> {
  constructor() {
    super(products);
  }

  async getByCategoryId(categorisid: string) {
    try {
      // Gọi phương thức lấy dữ liệu từ cơ sở dữ liệu dựa trên categoriesid
      const products = await this.model.findAll({
        where: {
          categorisid: categorisid,
        },
      });

      return products;
    } catch (error) {
      throw error;
    }
  }
}
