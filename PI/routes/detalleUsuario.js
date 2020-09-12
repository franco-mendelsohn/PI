var express = require('express');
const detalleUsuarioController = require('../controllers/detalleUsuarioController');
var router = express.Router();

/* GET home page. */
router.get('/', detalleUsuarioController.uno);

module.exports = router;