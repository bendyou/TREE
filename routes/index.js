var express = require('express');
var router = express.Router();
var Tree = require('../models/tree').Tree;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tree1', function(req, res, next) {
  res.render('tree', {
  title: "Дерево",
  picture: "images/tree1.png",
  desc: "Ну типо описание первого дерева"
  });
 });

 router.get('/tree2', function(req, res, next) {
  res.render('tree', {
  title: "Дерево",
  picture: "images/tree2.png",
  desc: "Ну типо описание первого дерева"
  });
 });

 router.get('/tree3', function(req, res, next) {
  res.render('tree', {
  title: "Дерево",
  picture: "images/tree3.png",
  desc: "Ну типо описание первого дерева"
  });
 });

module.exports = router;