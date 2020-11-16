var express = require('express');
const ingresoController = require('../controllers/ingresoController');
var router = express.Router();

/* GET home page. */
router.get('/login', ingresoController.login);
router.post('/login', ingresoController.check);
router.get('/registro', ingresoController.index);
router.post('/registro', ingresoController.store);
router.post('/logout', ingresoController.logout);
router.get("/olvidepw", ingresoController.renderpw);
// router.post("/olvidepw", ingresoController.renderpw);


module.exports = router;