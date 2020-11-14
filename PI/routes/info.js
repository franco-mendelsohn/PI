var express = require('express');
const infoController = require('../controllers/infoController');
var router = express.Router();

/* GET home page. */

router.get('/miPerfil/', infoController.miPerfil)
router.get('/esp/:id', infoController.esp);
router.get("/editarPerfil", infoController.editarPerfil);

module.exports = router;