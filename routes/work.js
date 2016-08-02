var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('work').then(function(data) {
  res.json(data);
  })
});

router.get('/:id', function(req, res, next) {
  return knex('work').where('id', req.params.id).then(function(data) {
  res.json(data);
  })
});

router.post('/', function(req, res, next) {
  return knex('work').insert(req.body).then(function(data) {
  res.json({success: "submission excepted"});
  })
});

router.put('/:id', function(req, res, next) {
  return knex('work').update(req.body).where('id', req.params.id).then(function(data) {
  res.json({success: "post edited"});
  })
});

router.delete('/:id', function(req, res, next) {
  return knex('work').del().where('id', req.params.id).then(function(data) {
  res.json({success: "item deleted"});
  })
});

module.exports = router;
