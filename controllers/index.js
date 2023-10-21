const userController = require('./user.controller');
const authController = require('./auth.controller');
const storeController = require('./store.controller');
module.exports = {
    ...userController,
    ...authController,
    ...storeController
}