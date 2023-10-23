const {Router}= require('express');
const { getAllPurchase, savePurchase } = require('../controllers');
const { createPurchaseValidator } = require('../validators/purchase.validator');
const router = Router();

router.get('/byStore/:id',getAllPurchase);
router.post('/',createPurchaseValidator,savePurchase);
module.exports = router;