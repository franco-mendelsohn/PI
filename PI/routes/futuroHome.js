var express = require('express');
const futuroHomeController = require('../controllers/futuroHomeController');
var router = express.Router();

/* GET home page. */
router.get('/', futuroHomeController.uno);

module.exports = router;