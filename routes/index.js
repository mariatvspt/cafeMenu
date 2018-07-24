var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Single Ladies' });
});

router.get('/maria', function(req, res, next) {
  res.render('maria', { person1: 'Maria', person2: 'Gui' });
});

module.exports = router;
