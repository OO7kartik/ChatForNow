const express = require('express');
const bodyParser = require('body-parser');
const register_details = require('../models/registerM');
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}

router.get('/',function(req,res){
  res.render('register');
});

router.post('/',urlencodedParser, function(req,res,next){

  if(req.body.name.length < 1){
    return res.render('register_fill' , {msg: "Your name is required"} );
  }else if( !validate(req.body.email) ){
    return res.render('register_fill' , {msg: "Enter a valid email"} );
  }else if( req.body.password.length < 6){
    return res.render('register_fill' , {msg: "Password minimum 6 characters"} );
  }else{
  User = new register_details(req.body)
  User.save().then( () => {
    console.log(req.body);
    // have to make msg display on home screen for 2sec (like fade)
    //return res.render("home",{msg: "Succesfully registered!"})
    return res.status(200).render("register_done", { data: {name: User.name, email: User.email, password: User.password} });
  }).catch(() => {
    return res.render('register_fill' , {msg: 'Email already registered'});
  });
}
})

module.exports = router;
