const {Router}= require('express');
const { getAllCategories, getCategoryById, saveCategory, deleteCategory, restoreCategory, updateCategory } = require('../controllers/category.controller');
const { getCategoryByIdValidator, createCategoryValidator } = require('../validators/category.validator');

const router = Router();

router.get('/byStore/:id',getAllCategories);
router.get('/:id',getCategoryByIdValidator,getCategoryById);
router.post('/',createCategoryValidator,saveCategory);
router.put('/:id',getCategoryByIdValidator,updateCategory);
router.delete('/:id',getCategoryByIdValidator,deleteCategory);
router.put('/restore/:id',getCategoryByIdValidator,restoreCategory);

module.exports = router;