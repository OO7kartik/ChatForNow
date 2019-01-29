const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating our login Schema
const registerSc = new Schema({
  name: {
    type:String,
    required: ['true', 'Name field is required']
  },

  email: {
    type:String,
    required: ['true', 'email field is required']
  },
  password: {
    type:String,
    required: ['true', 'password field is required']
  },
});

const register_details = mongoose.model('register_details' , registerSc);

module.exports = register_details;
