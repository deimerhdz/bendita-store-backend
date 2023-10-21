const {Router}= require('express');
const { login } = require('../controllers');


const router = Router();

router.post('/',login);

module.exports =  router
