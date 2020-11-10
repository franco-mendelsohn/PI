const { Router } = require('express');
var express = require('express');
const homeController = require('../controllers/homeController');
var router = express.Router();


/* GET home page. */
router.get('/', homeController.home);
router.get('/feed', homeController.feed);
router.get('/all/', homeController.all);
router.get('/search/', homeController.search);
router.get('/searchh/', homeController.searchh);

module.exports = router;
