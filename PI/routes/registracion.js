var express = require('express');
const registracionController = require('../controllers/registracionController');
var router = express.Router();

/* GET home page. */
router.get('/', registracionController.uno);

module.exports = router;