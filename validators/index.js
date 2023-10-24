const userValidators = require('./user.validators');
const storeValidators = require('./store.validators');
const merchantValidators = require('./merchant.validators');
const uploadValidators = require('./upload.validators');

module.exports = {
    ...userValidators,
    ...storeValidators,
    ...merchantValidators,
    ...uploadValidators
}