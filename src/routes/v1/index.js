const express = require('express');
const productController = require('../../controller/product-controller');

const router = express.Router();

router.get('/product/:id',productController.get);
router.get('/product',productController.getAll);
router.post('/product',productController.create);
router.patch('/product/:id',productController.update);
router.delete('/product/:id',productController.destroy);

module.exports=router;

