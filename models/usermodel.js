const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName : {
    type : String,
    required : true,
  },
  email : {
    type : String,
    required : true,
    minlength : 14
  },
  password : {
    type : String,
    required : true,
    minlength : 8
  },
  updatedAt : Date
})


userSchema.pre('save' , function (next){
  this.updatedAt = Date.now()
  next();
})
const User = mongoose.model("User_Register_Collection" , userSchema);

module.exports = User;

