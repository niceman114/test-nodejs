var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lotto', { 
    title: 'Lotto!', 
    numbers: [1,2,3,4,5,6] 
  });
});

module.exports = router;