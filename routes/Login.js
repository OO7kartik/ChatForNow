const express = require('express');
const bodyParser = require('body-parser');
const register_details = require('../models/registerM');
const router = express.Router();
//to convert to chf-8, to extra data properly
const urlencodedParser = bodyParser.urlencoded({ extended: false});

router.get('/',function(req,res){
  res.render('login', {data: { msg: ""} });
});

router.post('/', function(req, res){
  var email = req.body.email;
  var password = req.body.password;

  register_details.findOne({email: email}).then( (result) => {
    if(result.password === password){
      console.log(result.password);
      console.log(password);
      return res.status(200).render('login_done',{data: {email: email, password: password, msg:""}})
    }else{
      return res.status(200).render('login',{data: {msg: 'password is incorrect'}})
    }
  }).catch( () => {
    return res.status(200).render('login',{data: {msg: 'email not registered'}})
  })
});

// router.post('/', urlencodedParser,function(req,res){
//   res.render('login_done' , {data: req.body});
// });

module.exports = router;
