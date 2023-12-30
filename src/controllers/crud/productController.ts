import { productService } from '@/services';
import { CrudController } from '@/controllers';
import { Request, Response, Router } from 'express';

export class ProductController extends CrudController<typeof productService> {
  private router: Router;

  constructor() {
    super(productService);
    // Tạo một router mới
    this.router = Router();
    // Bind các method cần thiết
    this.getByCategoryId = this.getByCategoryId.bind(this);
    // Gắn các route vào router
    this.router.get('/categoris/:categorisid', this.getByCategoryId);
  }

  async getByCategoryId(req: Request, res: Response) {
    try {
      // Sử dụng tên tham số đúng
      const { categorisid } = req.params;
      // Gọi service để lấy danh sách sản phẩm theo categoriesid
      const products = await productService.getByCategoryId(categorisid);
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  // Getter để trả về router
  getRouter(): Router {
    return this.router;
  }
}

// import { productService } from '@/services';
// import { CrudController } from '@/controllers';
// import { ICrudOption } from '@/interfaces';
// import { Request, Response, Router } from 'express';
// import { ProductRouter } from '@/routers';
// export class ProductController extends CrudController<typeof productService> {
//   constructor() {
//     super(productService);

//     // Bind the method to the class instance
//     this.getByCategoryId = this.getByCategoryId.bind(this);

//     // Attach the method to the router
//     this.ProductRouter.get('/products/category/:categorisid', this.getByCategoryId);
//   }

//   async getByCategoryId(req: Request, res: Response) {
//     try {
//       const { categorisid } = req.params;

//       // Gọi service để lấy danh sách sản phẩm theo categoriesid
//       const products = await productService.getByCategoryId(categorisid);

//       res.json(products);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   }
// }
