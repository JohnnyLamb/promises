var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var User = require('../models/user.js');

// GET all users
router.get('/users', function(req, res, next) {
  User.findQ()
    .then(function (result) { res.json(result);})
    .catch(function (err) {res.send(err);})
    .done();
});
//// Write the rest of this Crud app using promises instead of callbacks.
// POST ALL USERs
router.post('/users', function(req, res, next) {
  new User({
    username: req.body.username
    })
    .saveQ()
    .then(function(result){res.json(result);})
    .catch(function(err){res.send(err);})
    .done();
  });
// DELETE USER
router.delete('/user/:id', function(req, res, next) {
   User
    .findByIdAndRemoveQ(req.params.id)
    .then(function(result){res.json(result);})
    .catch(function(err){res.send(err);})
    .done();
  });
// GET SINGLE USER
router.get('/user/:id', function(req, res, next) {
   User
    .findByIdQ(req.params.id)
    .then(function(result){res.json(result);})
    .catch(function(err){res.send(err);})
    .done();
  });
// PUT user
router.put('/user/:id', function(req, res, next) {
   User
    .findByIdAndUpdateQ(req.params.id,{username:req.body.name},{new: true})
    .then(function(result){res.json(result);})
    .catch(function(err){res.send(err);})
    .done();
  });
module.exports = router;
