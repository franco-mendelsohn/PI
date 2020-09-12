var express = require('express');
const agregarPostController = require('../controllers/agregarPostController');
var router = express.Router();

/* GET home page. */
router.get('/', agregarPostController.uno);

module.exports = router;