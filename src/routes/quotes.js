const express = require('express');
const router = express.Router();

const quotesController = require('../controllers/quotesControllers');

router.get('/admin/', quotesController.list);
router.post('/admin/', quotesController.find);
router.post('/admin/register/', quotesController.save);
router.get('/delete/:code', quotesController.delete);
router.get('/update/:code', quotesController.update);
router.post('/update/:code', quotesController.saveUpdate);

module.exports = router;