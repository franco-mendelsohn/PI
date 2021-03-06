var express = require('express');
const postController = require('../controllers/postController');
var router = express.Router();

/* GET home page. */
router.get('/detalle/:id', postController.detalle);
router.get('/agregar', postController.agregar);
router.post('/agregar', postController.store);
router.post("/detalle/:id", postController.destroy);
router.post("/detalle/", postController.hola);
router.get("/edit/:id", postController.edit);
router.post("/edit/:id", postController.update);


module.exports = router;