const { check } = require("express-validator");
const { validateFields } = require("../helpers/validate-field");
const { existStoreById, existMerchant, existMerchantById } = require("../helpers/db-validator");

const createMerchantValidator = [
    check('name','name is required').not().isEmpty(),
    check('name').custom(existMerchant),
    check('storeId','storeId is required').not().isEmpty(),
    check('storeId').custom(existStoreById),
    validateFields
]
const getMerchantByIdValidator =[
    check('id').custom(existMerchantById),
    validateFields
 
]
module.exports ={
    createMerchantValidator,
    getMerchantByIdValidator
}