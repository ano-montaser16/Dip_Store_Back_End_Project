const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title : {
    type : String,
    required : true,
  },
  price : {
    type : Number,
    required : true,
  },
  description : {
    type : String,
    required : true,
    maxLength : 100
  },
  category : {
    type : String,
    required : true,
  },
  image : {
    type : String,
    required : true,
  },
  rating : {
    type : Number,
    required : true,
  }
  
})

productSchema.pre('save' , function (next){
  this.updatedAt = Date.now()
  next();
})
const Product = mongoose.model("Products" , productSchema);

module.exports = Product;
