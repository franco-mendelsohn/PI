var express = require('express');
const infoController = require('../controllers/infoController');
var router = express.Router();

/* GET home page. */
router.get('/detalleUsuario', infoController.usuario);
router.get('/miPerfil', infoController.miPerfil)
router.get('/resultadoBusqueda', infoController.busqueda)

module.exports = router;