var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();

/* GET home page. */
router.get('/detalle', postController.detalle);
router.get('/agregar', postController.agregar);
router.post('/agregar', postController.store);

module.exports = router;