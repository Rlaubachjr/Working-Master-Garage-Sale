const express = require('express');

const productsController = require('../controllers/products-controller');

const router = express.Router();

router.post('/category', productsController.setCategory);



router.get('/products', productsController.getAllProducts);

router.get('/products/:id', productsController.getProductDetails);

module.exports = router;