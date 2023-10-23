const { check } = require("express-validator");
const { existStoreById } = require("../helpers/db-validator");
const { validateFields } = require("../helpers/validate-field");

const createPurchaseValidator = [
    check('total','storeId is required').not().isEmpty(),
    check('items','items is required').not().isEmpty(),
    check('items','items is not valid').isArray({min:1}),
    check('storeId','storeId is required').not().isEmpty(),
    check('storeId').custom(existStoreById),
    validateFields
]

module.exports ={
    createPurchaseValidator
}