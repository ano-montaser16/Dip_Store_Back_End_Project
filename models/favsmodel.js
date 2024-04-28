const mongoose = require('mongoose');

const favouritesSchema = new mongoose.Schema(
    {
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
      },
        updatedAt: Date

    }
);
module.exports = mongoose.model('Favourite', favouritesSchema);