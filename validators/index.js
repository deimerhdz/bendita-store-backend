const userValidators = require('./user.validators');
const storeValidators = require('./store.validators');
const merchantValidators = require('./merchant.validators');
module.exports = {
    ...userValidators,
    ...storeValidators,
    ...merchantValidators
}