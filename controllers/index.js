const userController = require('./user.controller');
const authController = require('./auth.controller');
const storeController = require('./store.controller');
const merchantController = require('./merchant.controller');

module.exports = {
    ...userController,
    ...authController,
    ...storeController,
    ...merchantController
}