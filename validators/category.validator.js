const { check } = require("express-validator")
const { validateFields } = require("../helpers/validate-field")
const { existCategoryById, existCategory, existStoreById } = require("../helpers/db-validator")

const getCategoryByIdValidator =[
    check('id').custom(existCategoryById),
    validateFields
]

const createCategoryValidator = [
    check('name').not().isEmpty(),
    check('name').custom(existCategory),
    check('storeId','storeId is required').not().isEmpty(),
    check('storeId').custom(existStoreById),
    validateFields
]

module.exports = {
    getCategoryByIdValidator,
    createCategoryValidator
}