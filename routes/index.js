var express = require('express');
var router = express.Router();
var Tree = require('../models/tree').Tree;
var User = require('../models/user').User;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', counter:req.session.counter });
  });

  router.get('/logreg', function(req, res, next) {
    res.render('logreg', { title: 'Вход' });
});

  /* GET login/registration page. */
  router.get('/logreg', function(req, res, next) {
    res.render('logreg',{title: 'Вход'});
    });
    
  /* POST login/registration page. */
  router.post('/logreg', async function(req, res, next) {
    var username = req.body.username
    var password = req.body.password
    console.log(username);
    console.log(password);
    var users = await User.find({username: username});
    console.log(users);
    if (!users.length) {
    //res.send("<h1>Пользователь НЕ найден</h1>");
    var user = new
    User({username:username,password:password})
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/');
    } else {
    //res.send("<h1>Пользователь найден</h1>");
    var foundUser = users[0];
    if(foundUser.checkPassword(password)){
    req.session.user_id = foundUser._id
    res.redirect('/')
    } else {
    res.render('logreg',{title: 'Вход'});
    }
    }
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