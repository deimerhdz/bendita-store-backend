const {Router}= require('express');
 const { getAllStores, getStoreById, saveStore, updateStore, deleteStore, restoreStore, getStoreByUserId } = require('../controllers');
const { createStoreValidator, getStoreByIdValidator, getUserByIdValidator} = require('../validators');

const router = Router();

router.get('/',getAllStores);
router.get('/:id',getStoreByIdValidator,getStoreById);
router.get('/byUser/:id',getUserByIdValidator,getStoreByUserId);
router.post('/',createStoreValidator,saveStore);
router.put('/:id',getStoreByIdValidator,updateStore);
router.delete('/:id',getStoreByIdValidator,deleteStore);
router.put('/restore/:id',getStoreByIdValidator,restoreStore);

module.exports = router;