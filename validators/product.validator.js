const { check } = require("express-validator");
const { validateFields } = require("../helpers/validate-field");
const { existStoreById, existProduct, existProductById, existMerchantById, existCategoryById, existProductBarCode } = require("../helpers/db-validator");

const createProductValidator = [
    check('name','name is required').not().isEmpty(),
    check('price','price is required').not().isEmpty(),
    check('cost','cost is required').not().isEmpty(),
    check('size','size is required').not().isEmpty(),
    check('storeId','storeId is required').not().isEmpty(),
    check('storeId').custom(existStoreById),
    check('categoryId','categoryId is required').not().isEmpty(),
    check('categoryId').custom(existCategoryById),
    check('merchantId','merchantId is required').not().isEmpty(),
    check('merchantId').custom(existMerchantById),
    check('barcode','barcode is required').not().isEmpty(),
    check('barcode').custom(existProductBarCode),
    validateFields
]
const getProductByIdValidator =[
    check('id').custom(existProductById),
    validateFields
 
]
module.exports ={
    createProductValidator,
    getProductByIdValidator
}