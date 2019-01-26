const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
//to convert to chf-8, to extra data properly
const urlencodedParser = bodyParser.urlencoded({ extended: false});

router.get('/',function(req,res){
  res.render('login',{ title: 'Express' });
});

router.post('/', urlencodedParser,function(req,res){
  res.render('login_done' , {data: req.body});
});

module.exports = router;
