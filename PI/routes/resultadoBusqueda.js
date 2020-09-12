var express = require('express');
const resultadoBusquedaController = require('../controllers/resultadoBusquedaController');
var router = express.Router();

/* GET home page. */
router.get('/', resultadoBusquedaController.uno);

module.exports = router;