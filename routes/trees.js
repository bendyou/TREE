var express = require('express');
var router = express.Router();
var Tree = require('../models/tree').Tree;
var checkAuth = require("../middlewares/checkAuth.js");

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с trees');
});

router.get("/:nick", checkAuth, async function(req, res, next) {
  var trees = await Tree.find({ nick: req.params.nick });
  console.log(trees)
  if (!trees.length) return next(new Error("Нет такого дерева"))
  var tree = trees[0];
  res.render('tree', {
    title: tree.title,
    picture: tree.avatar,
    desc: tree.desc
  })
});

module.exports = router;
