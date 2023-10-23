const {Router}= require('express');
const { getAllSale, saveSale } = require('../controllers');
const { createSaleValidator } = require('../validators/sale.validator');
const router = Router();

router.get('/byStore/:id',getAllSale);
router.post('/',createSaleValidator,saveSale);
module.exports = router;