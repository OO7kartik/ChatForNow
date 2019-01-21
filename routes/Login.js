const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false});

router.get('/',function(req,res){
  res.render('login',{ title: 'Express' });
});

module.exports = router;
