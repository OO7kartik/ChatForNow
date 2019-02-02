const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

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
