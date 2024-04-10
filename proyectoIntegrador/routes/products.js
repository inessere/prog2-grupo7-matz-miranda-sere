var express = require('express');
var router = express.Router();
const controladorProduct = require('../controllers/productController');
const controladorProductadd = require('../controllers/productAddController');
const controladorSearchresults = require('../controllers/searchResultsController');
const controladorIndex = require('../controllers/indexController');


router.get("/",controladorIndex.index);
router.get('/product-add', controladorProductadd.productAdd);
router.get('/search-results', controladorSearchresults.searchResults);
router.get("/product",controladorProduct.product);


module.exports = router;