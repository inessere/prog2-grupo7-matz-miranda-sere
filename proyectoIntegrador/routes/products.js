var express                     = require('express');
var router                      = express.Router();
const controladorProduct        = require('../controllers/productController');


router.get("/id/:id",controladorProduct.detalle);
router.get('/product-add', controladorProduct.showFormCreate);
router.get('/search-results', controladorProduct.searchResults);
router.get('/productEdit/:id', controladorProduct.productEdit);

//POST
router.post('/product-add', controladorProduct.store);

module.exports = router;