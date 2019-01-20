const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

router.get('/',function(req,res){
  res.render('register',{ title: 'Express' });
});

router.post('/', urlencodedParser,function(req,res){
  res.render('register_done' , {data: req.body});
});

module.exports = router;
