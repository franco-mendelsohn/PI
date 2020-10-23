var express = require('express');
const infoController = require('../controllers/infoController');
var router = express.Router();

/* GET home page. */

router.get('/miPerfil', infoController.miPerfil)
router.get('/resultadoBusqueda', infoController.busqueda)
router.get('/especifico/:id', infoController.especifico);

module.exports = router;