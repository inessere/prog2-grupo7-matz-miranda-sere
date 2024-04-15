var express                     = require('express');
var router                      = express.Router();
const controladorLogin          = require('../controllers/loginController');
const controladorProfileedit    = require('../controllers/profileEditController');
const controladorProfile        = require('../controllers/profileController');
const controladorRegister       = require('../controllers/registerController');
const controladorIndex          = require('../controllers/indexController');

router.get("/",controladorIndex.index);
router.get('/login', controladorLogin.login);
router.get('/profile-edit', controladorProfileedit.profileEdit);
router.get('/profile', controladorProfile.profile);
router.get('/register', controladorRegister.register);

module.exports = router;