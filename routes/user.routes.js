const {Router}= require('express');
const { getAllUsers, getUserById, saveUser, updateUser, deleteUser, restoreUser } = require('../controllers');
const { createUserValidator, getUserByIdValidator } = require('../validators');

const router = Router();

router.get('/',getAllUsers);
router.get('/:id',getUserByIdValidator,getUserById);
router.post('/',createUserValidator,saveUser);
router.put('/:id',getUserByIdValidator,updateUser);
router.delete('/:id',getUserByIdValidator,deleteUser);
router.put('/restore/:id',getUserByIdValidator,restoreUser);

module.exports = router;