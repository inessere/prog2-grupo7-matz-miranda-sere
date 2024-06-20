var express = require('express');
var router = express.Router();
const controladorProduct = require('../controllers/productController');
const { body } = require("express-validator");
const db = require("../database/models");

let validationsProducto = [
    body("fotoProducto")
        .notEmpty()
        .withMessage("debes ingresar una foto para el nuevo producto")
        .bail(),
    body("nombreProducto")
        .notEmpty()
        .withMessage("debes ingresar un nombre para el nuevo producto")
        .bail(),
    body("descripcion")
        .notEmpty()
        .withMessage("debes ingresar una descripcion para el nuevo producto")
        .bail()
]

router.get("/id/:id", controladorProduct.detalle);
router.get('/product-add', controladorProduct.showFormCreate);
router.get("/search-results", controladorProduct.searchResults);
router.get('/productEdit/:id', controladorProduct.productEdit);
router.get('/editProduct/:id', controladorProduct.showFormUpdate);

//POST
router.post("/productEdit", controladorProduct.update);
router.post('/product-add', validationsProducto, controladorProduct.store);
router.post("/comentario/id/:id", controladorProduct.comentario);



module.exports = router;