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
let validationComentario=[
body("comentario")
    .notEmpty()
    .withMessage("Debes ingresar un comentario")
    .isLength({ min: 3 })
    .withMessage("La longitud del mensaje debe tener mas de 3 caracteres")
    .bail(),
]

router.get("/id/:id", controladorProduct.detalle);
router.get('/product-add', controladorProduct.showFormCreate);
router.get("/search-results", controladorProduct.searchResults);
router.get('/productEdit/:id', controladorProduct.productEdit);
router.get('/editProduct/:id', controladorProduct.showFormUpdate);

//POST
router.post("/productEdit", controladorProduct.update);
router.post('/product-add', validationsProducto, controladorProduct.store);
router.post("/comentario/id/:id",validationComentario, controladorProduct.storeComentario);



module.exports = router;