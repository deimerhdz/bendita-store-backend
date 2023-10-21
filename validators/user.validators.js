const { check } = require("express-validator");
const { existEmail, existUserById } = require("../helpers/db-validator");
const { validateFields } = require("../helpers/validate-field");

const createUserValidator = [
    check('name','name is required').not().isEmpty(),
    check('roleId','role is required').not().isEmpty(),
    check('lastname','lastname is required').not().isEmpty(),
    check('password','The password most be at least 6 characters').isLength({min:6}),
    check('email','This is not an email').isEmail(),
    check('email').custom(existEmail),
    validateFields
]
const getUserByIdValidator =[
    check('id').custom(existUserById),
    validateFields
 
]
module.exports ={
    createUserValidator,
    getUserByIdValidator
}