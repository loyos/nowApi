'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PromoSchema = new Schema({
  name: {
    type: String
  },
  img: {
    type: String,
  },
  info: {
    type: String
  },
  day:{
    type: String
  },
  category:{
    type: String
  }
});

module.exports = mongoose.model('Promos', PromoSchema);