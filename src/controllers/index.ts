import { CrudController } from './crudController';
import { UserController } from './crud/UserController';
import { OrderController } from './crud/orderController';
import { CategorisController } from './crud/categorisController';
import { ProductController } from './crud/productController';
import { PaymentController } from './crud/paymentController';
import { PromotionController } from './crud/promotionController';
import { PaymentReviewController } from './crud/reviewController';
// SECTION

// Crud

const userController = new UserController();
const orderController = new OrderController();
const categorisController = new CategorisController();
const productController = new ProductController();
const paymentController = new PaymentController();
const promotionController = new PromotionController();
const reviewController = new PaymentReviewController();
// SECTION

export {
  CrudController,
  userController,
  orderController,
  categorisController,
  productController,
  paymentController,
  promotionController,
  reviewController,
};
