const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating our login Schema
const LoginSc = new Schema({
  email: String,
  password: String
});

const Login_details = mongoose.model('login_details' , LoginSc);

module.exports = Login_details;
