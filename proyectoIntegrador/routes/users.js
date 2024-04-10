var express = require('express');
var router = express.Router();
const controlador = require('../controllers/loginController');
const controlador = require('../controllers/profileEditController');
const controlador = require('../controllers/profileController');
const controlador = require('../controllers/registerController');

router.get('/login', controlador.login);
router.get('/profile-edit', controlador.profileEdit);
router.get('/profile', controlador.profile);
router.get('/register', controlador.register);

module.exports = router;