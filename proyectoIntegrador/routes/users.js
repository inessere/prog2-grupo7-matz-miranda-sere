var express = require('express');
var router = express.Router();
const userController = require('../controllers/usersController');
const { body } = require("express-validator");
const db = require("../database/models");

let validations = [
    body("email")
        .notEmpty()
        .withMessage("Debes ingresar un email")
        .isEmail().withMessage("completa un email valido")
        .custom(function (value) {
            return db.Usuario.findOne({
                where: { mail: value },
            })
                .then(function (user) {
                    if (user) {
                        throw new Error("El mail ingresado ya existe")
                    }

                })
        }),
    body("usuario")
        .notEmpty()
        .withMessage("Debes ingresar un nombre").bail(),
    body("contrasenia")
        .notEmpty()
        .isLength({ min: 4 })
        .withMessage("La contraseña debe tener al menos 4 caracteres")
]

router.get("/id/:id", userController.profile);
router.get('/login', userController.login);
router.get('/profile-edit', userController.profileEdit);
router.get('/profile', userController.profile);
router.get('/register', userController.register);

//POST
router.post('/register', validations, userController.store);

module.exports = router;