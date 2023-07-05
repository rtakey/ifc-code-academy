var express = require('express');
var router = express.Router();

/* GET Vitrine. */
router.get('/', function(req, res, next) {
  res.render('vitrine', { title: 'teste vitrine' });
});

module.exports = router;
