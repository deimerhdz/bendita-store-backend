const { check } = require("express-validator");
const { validateFields } = require("../helpers/validate-field");
const { existUserById, existStoreById } = require("../helpers/db-validator");

const createStoreValidator = [
    check('name','name is required').not().isEmpty(),
    check('userId','role is required').not().isEmpty(),
    check('userId').custom(existUserById),
    validateFields
]
const getStoreByIdValidator =[
    check('id').custom(existStoreById),
    validateFields
 
]

module.exports ={
    createStoreValidator,
    getStoreByIdValidator,
    
}
