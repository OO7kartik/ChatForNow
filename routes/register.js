const express = require('express');
const bodyParser = require('body-parser');
const register_details = require('../models/registerM');
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

router.get('/',function(req,res){
  res.render('register');
});

router.post('/', urlencodedParser,function(req,res,next){
  register_details.create(req.body).then(function(){
    res.render('register_done' , {data: req.body});
  }).catch(next);
});

module.exports = router;
