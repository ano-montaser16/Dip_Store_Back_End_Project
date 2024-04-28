const Product = require('../models/productmodel')


const getAllProducts = async (req , res) =>{
  let Products = await Product.find()
  if (!Products) {
    return res.json({Message : "Nothing found"})
  }
  res.json(Products);
} 


const getProductByID = async (req , res) =>{
  try {
    const id = req.params.productID

    let singleProduct = await Product.findById(id)
    if(!singleProduct){
      return res.status(404).json({msg : "product not found"})
    }
    res.json(singleProduct);

  } catch (error) {
    return  res.status(400).json(error);
}
}




const addNewProduct = async (req , res) =>{
  try {
    let addNewProduct = new Product(req.body);
    await addNewProduct.save();
    res.json(addNewProduct);
  } catch (error) {
      return  res.status(400).json(error);
  }
  }

  const updateProductInfo = async (req , res) =>{
    try {
      const id = req.params.productID;

      let singleProduct = await Product.findByIdAndUpdate(id , req.body , {new : true})
      if(!singleProduct){
        return res.status(404).json({msg : "product not found"})
      }
      res.json(singleProduct);
    } catch (error) {
      return  res.status(400).json(error);
  }

}

const deleteProduct = async (req , res) =>{
  try {
    const id = req.params.productID;

    let singleProduct = await Product.findByIdAndDelete(id)
    if(!singleProduct){
      return res.status(404).json({msg : "product not found"})
    }
    res.json({Message : "product deleted successfully"});
  } catch (error) {
    return  res.status(400).json(error);
}

}

module.exports = {
  getAllProducts,
  getProductByID,
  addNewProduct,
  updateProductInfo,
  deleteProduct

}