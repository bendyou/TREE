var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Привет, добро пожаловать на сайт о деревьях!' });
});

router.get('/tree1', function(req, res, next) {
  res.render('tree', {
    title: "Дерево тип 1",           // Заголовок страницы
    picture: "/images/tree1.png",    // Путь к изображению
    desc: "Описание первого дерева." // Описание дерева
  });
});

router.get('/tree2', function(req, res, next) {
  res.render('tree', {
    title: "Дерево тип 2",
    picture: "/images/tree2.png",
    desc: "Описание второго дерева."
  });
});

router.get('/tree3', function(req, res, next) {
  res.render('tree', {
    title: "Дерево тип 3",
    picture: "/images/tree3.png",
    desc: "Описание третьего дерева."
  });
});

module.exports = router;
