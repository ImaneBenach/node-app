var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/ville', function(req, res, next) {
  res.render('index', { title: 'test' });
});

module.exports = router;