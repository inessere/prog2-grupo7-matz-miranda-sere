var express            = require('express');
var router             = express.Router();
const controladorIndex = require('../controllers/indexController');

/* GET home page. */
router.get('/index', controladorIndex.index);


module.exports = router;
