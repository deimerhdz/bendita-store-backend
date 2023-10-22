const {Router}= require('express');
 const { getAllMerchants, saveMerchant, getMerchantById, updateMerchant, restoreMerchant, deleteMerchant } = require('../controllers');
const { createMerchantValidator, getMerchantByIdValidator } = require('../validators');

const router = Router();

router.get('/byStore/:id',getAllMerchants);
router.get('/:id',getMerchantByIdValidator,getMerchantById);

router.post('/',createMerchantValidator,saveMerchant);
router.put('/:id',getMerchantByIdValidator,updateMerchant);
router.delete('/:id',getMerchantByIdValidator,deleteMerchant);
router.put('/restore/:id',getMerchantByIdValidator,restoreMerchant);

module.exports = router;