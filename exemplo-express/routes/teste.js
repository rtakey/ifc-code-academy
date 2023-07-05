var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./views/teste', { title: 'Express teste' });
});

module.exports = router;
