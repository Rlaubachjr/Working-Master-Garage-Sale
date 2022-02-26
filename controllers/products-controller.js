const Product = require('../models/product-model');

var categoryType = "";
global.categoryType= "";
async function setCategory(req, res, next) {
  categoryType = req.body.category;
  global.categoryType = categoryType;
  
  try{
    const products = await Product.findAll();
    res.render('customer/products/all-products', { products: products });
  } catch (error) {
    next();
  }
  
   

}


async function getAllProducts(req, res, next) {
  try {
    const products = await Product.findAll();
    res.render('customer/products/all-products', { products: products });
  } catch (error) {
    next(error);
  }
}

async function getProductDetails(req, res, next) {
  try {
    const product = await Product.findById(req.params.id);
    res.render('customer/products/product-details', { product: product });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts: getAllProducts,
  getProductDetails: getProductDetails,
  setCategory: setCategory,
  
};