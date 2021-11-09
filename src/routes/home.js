const express = require('express');
const router = express.Router();

const homeController = require('../controllers/homeControllers');

router.get('/home', homeController.home);
router.post('/home', homeController.validate);
router.get('/home/sign-in/', homeController.signIn);
router.post('/home/sign-in/', homeController.saveNewAfiliado);

module.exports = router;