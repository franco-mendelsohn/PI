var express = require('express');
const loginController = require('../controllers/loginController');
var router = express.Router();

/* GET home page. */
router.get('/', loginController.uno);

module.exports = router;