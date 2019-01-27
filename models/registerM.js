const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating our login Schema
const registerSc = new Schema({
  name: String,
  email: String,
  password: String
});

const register_details = mongoose.model('register_details' , registerSc);

module.exports = register_details;
