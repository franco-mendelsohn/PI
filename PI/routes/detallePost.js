var express = require('express');
const detallePostController = require('../controllers/detallePostController');
var router = express.Router();

/* GET home page. */
router.get('/', detallePostController.uno);

module.exports = router;