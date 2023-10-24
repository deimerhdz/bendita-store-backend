const { check } = require("express-validator");
const { allowedCollection } = require("../helpers/allowedCollection");
const { validateFile } = require("../middlewares/validateFile");
const { validateFields } = require("../helpers/validate-field");


const validatorUpdateUpload=[
    validateFile,
    check('id','It is not valid id').not().isEmpty(),
    check('collection').custom(c=>allowedCollection(c,['stores','products'])),
    validateFields
];

module.exports = {
    validatorUpdateUpload
}