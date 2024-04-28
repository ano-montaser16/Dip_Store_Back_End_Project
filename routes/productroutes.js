const express = require("express");

const productcontrollers = require('../controllers/productcontrollers');
const prodRouter = express.Router();



prodRouter.route('/')
.get(productcontrollers.getAllProducts)
.post(productcontrollers.addNewProduct)

prodRouter.route('/:productID')
.get(productcontrollers.getProductByID)
.patch(productcontrollers.updateProductInfo)
.delete(productcontrollers.deleteProduct)




module.exports = prodRouter;
