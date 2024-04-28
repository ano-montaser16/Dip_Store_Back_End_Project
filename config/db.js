const mongoose = require('mongoose');


const connectDb = () =>{
  mongoose.connect('mongodb://localhost/Dip_Store').then(() =>{
  console.log('connected successfully to the server');
})
}

module.exports = connectDb;