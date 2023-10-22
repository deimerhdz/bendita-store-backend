const {Router}= require('express');
const { getAllProducts, getProductById, saveProduct, deleteProduct, restoreProduct, updatedProduct } = require('../controllers');
const { getProductByIdValidator, createProductValidator } = require('../validators/product.validator');
const router = Router();

router.get('/byStore/:id',getAllProducts);
router.get('/:id',getProductByIdValidator,getProductById);
router.post('/',createProductValidator,saveProduct);
router.put('/:id',getProductByIdValidator,updatedProduct);
router.delete('/:id',getProductByIdValidator,deleteProduct);
router.put('/restore/:id',getProductByIdValidator,restoreProduct);
module.exports = router;