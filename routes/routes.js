var express = require('express');
var router = express.Router();

var indexController    = require('../controllers/index');

router.route('/')
  .get(indexController.index);

module.exports = router;
