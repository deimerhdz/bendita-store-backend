const userController = require('./user.controller');
const authController = require('./auth.controller');
const storeController = require('./store.controller');
const merchantController = require('./merchant.controller');
const productController = require('./product.controller');
const purchaseController = require('./purchase.controller');

module.exports = {
    ...userController,
    ...authController,
    ...storeController,
    ...merchantController,
    ...productController,
    ...purchaseController
}