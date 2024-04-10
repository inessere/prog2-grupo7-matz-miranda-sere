var express = require('express');
var router = express.Router();
const controlador = require('../controllers/productController');
const controlador = require('../controllers/productAddController');
const controlador = require('../controllers/searchResultsController');


router.get('/product-add', controlador.productAdd);
router.get('/product', controlador.product);
router.get('/search-results', controlador.searchResults);

module.exports = router;