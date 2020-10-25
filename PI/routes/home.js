const { Router } = require('express');
var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();


/* GET home page. */
router.get('/', homeController.home);
router.get('/futuroHome', homeController.futuro);
router.get('/all/', homeController.all);
router.get('/esp/:id', homeController.esp);
router.get('/buscar/:searchData', homeController.buscar);
router.get('/search/', homeController.search);

module.exports = router;
