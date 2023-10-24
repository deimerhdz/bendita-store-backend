const userController = require('./user.controller');
const authController = require('./auth.controller');
const storeController = require('./store.controller');
const merchantController = require('./merchant.controller');
const productController = require('./product.controller');
const purchaseController = require('./purchase.controller');
const saleController = require('./sale.controller');
const uploadController = require('./upload.controller');

module.exports = {
    ...userController,
    ...authController,
    ...storeController,
    ...merchantController,
    ...productController,
    ...purchaseController,
    ...saleController,
    ...uploadController
}