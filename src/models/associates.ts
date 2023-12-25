import { Users, Orders, categoris, deliveryreview, orderdetail, paymentreviews, payments, products, promotions } from '@/models/tables';
import { subcategories } from './tables/subcategories';

//User - Order
Users.hasMany(Orders, { foreignKey: 'userid', as: 'orders' });
Orders.belongsTo(Users, { foreignKey: 'userid', as: 'user' });
//User - payments
Users.hasMany(payments, { foreignKey: 'userid', as: 'payments' });
payments.belongsTo(Users, { foreignKey: 'userid', as: 'user' });
//User - Orderdetail
Orders.hasMany(orderdetail, { foreignKey: 'orderid', as: 'orderDetails' });
orderdetail.belongsTo(Orders, { foreignKey: 'orderid', as: 'order' });
//orders-deliveryreview
Orders.hasOne(deliveryreview, { foreignKey: 'orderid', as: 'deliveryReview' });
deliveryreview.belongsTo(Orders, { foreignKey: 'orderid', as: 'order' });
//orders-paymentreviews
Orders.hasMany(paymentreviews, { foreignKey: 'orderid', as: 'paymentReviews' });
paymentreviews.belongsTo(Orders, { foreignKey: 'orderid', as: 'order' });
//orders-payments
Orders.hasOne(payments, { foreignKey: 'orderid', as: 'payment' });
payments.belongsTo(Orders, { foreignKey: 'orderid', as: 'order' });
//User - deliveryreview
Users.hasMany(deliveryreview, { foreignKey: 'userid', as: 'detailReviews' });
deliveryreview.belongsTo(Users, { foreignKey: 'userid', as: 'user' });
//products-paymentReviews
products.hasMany(paymentreviews, { foreignKey: 'productid', as: 'paymentReviews' });
paymentreviews.belongsTo(products, { foreignKey: 'productid', as: 'product' });
//categoris-products
categoris.hasMany(subcategories, { foreignKey: 'categorisid', as: 'subcategories' });
subcategories.belongsTo(categoris, { foreignKey: 'categorisid', as: 'category' });
//supcategoris-products
subcategories.hasMany(products, { foreignKey: 'subcategoriesid', as: 'products' });
products.belongsTo(subcategories, { foreignKey: 'subcategoriesid', as: 'subcategories' });
//products-orderdetail
products.hasMany(orderdetail, { foreignKey: 'productid', as: 'orderDetails' });
orderdetail.belongsTo(products, { foreignKey: 'productid', as: 'product' });
//promotions-payments
promotions.hasOne(payments, { foreignKey: 'promotionid', as: 'orders' });
payments.belongsTo(promotions, { foreignKey: 'promotionid', as: 'promotion' });

console.log('Loading te Model.....');
