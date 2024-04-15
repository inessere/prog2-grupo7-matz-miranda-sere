var express                     = require('express');
var router                      = express.Router();
const controladorLogin          = require('../controllers/usersController');
const controladorProfileedit    = require('../controllers/usersController');
const controladorProfile        = require('../controllers/usersController');
const controladorRegister       = require('../controllers/usersController');
const controladorIndex          = require('../controllers/indexController');

router.get("/",controladorIndex.index);
router.get('/login', controladorLogin.login);
router.get('/profile-edit', controladorProfileedit.profileEdit);
router.get('/profile', controladorProfile.profile);
router.get('/register', controladorRegister.register);

module.exports = router;