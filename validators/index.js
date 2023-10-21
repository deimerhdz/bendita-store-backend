const userValidators = require('./user.validators');
const storeValidators = require('./store.validators')
module.exports = {
    ...userValidators,
    ...storeValidators
}