var express = require('express');
const miPerfilController = require('../controllers/miPerfilController');
var router = express.Router();

/* GET home page. */
router.get('/', miPerfilController.uno);

module.exports = router;