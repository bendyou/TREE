const mongoose = require('mongoose');
 mongoose.connect('mongodb://127.0.0.1:27017/testMongoose2024');
 var Tree = require('./models/tree.js').Tree
 var tree  = new Tree({
 title: "Коржик",
 nick: "test"
 })