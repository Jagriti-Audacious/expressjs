var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//express task 1
router.all("/*/",(req,res)=>{
  res.status(404).send({Message:"this page is not available"})
})


module.exports = router;
