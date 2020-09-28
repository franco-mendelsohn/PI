const { Router } = require('express');
var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();


/* GET home page. */
router.get('/', homeController.home);
router.get('/futuroHome', homeController.futuro);

module.exports = router;
