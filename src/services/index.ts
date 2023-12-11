import { TokenService } from './tokenSerivce';
import { products, categoris, Users, payments, Orders } from '@/models/tables';
import { ErrorService } from './errorService';
import { UtilService } from '@/services/utilService';
// Crud
import { ICrudExecOption, CrudService } from './crudService';
import { ScheduleService } from './scheduleService';

import { UserService } from './crud/userService';
import { ProductServive } from './crud/productService';
import { PaymentServive } from './crud/paymentService';
import { OrderService } from './crud/orderService';
import { CategorisService } from './crud/categorisService';
import { PromotionService } from './crud/promotionService';
import { PaymentReviewService } from './crud/paymentreviewService';
// SECTION

const errorService = new ErrorService();
const utilService = new UtilService();
const scheduleService = new ScheduleService();

// Crud
const userService = new UserService();
const productService = new ProductServive();
const paymentServire = new PaymentServive();
const orderService = new OrderService();
const categorisService = new CategorisService();
const promotionService = new PromotionService();
const paymentreviewServire = new PaymentReviewService();
const tokenService = new TokenService();

// SECTION

export {
  CrudService,
  ICrudExecOption,
  utilService,
  errorService,
  scheduleService,
  userService,
  productService,
  paymentServire,
  orderService,
  categorisService,
  promotionService,
  paymentreviewServire,
  tokenService,
};
