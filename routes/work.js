var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('work').then(function(data) {
  res.json(data);
  })
});

module.exports = router;
