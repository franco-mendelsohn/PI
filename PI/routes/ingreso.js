var express = require('express');
const ingresoController = require('../controllers/ingresoController');
var router = express.Router();

/* GET home page. */
router.get('/login', ingresoController.login);
router.get('/registro', ingresoController.registro)

module.exports = router;