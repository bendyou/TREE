var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tree1', function(req, res, next) {
  res.send("<h1>Дерево 1</h1>")
});

router.get('/tree2', function(req, res, next) {
  res.send("<h1>Дерево 2</h1>")
});

router.get('/tree3', function(req, res, next) {
  res.send("<h1>Дерево 3</h1>")
});

module.exports = router;
