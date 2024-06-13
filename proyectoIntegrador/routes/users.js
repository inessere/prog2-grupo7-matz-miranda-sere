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
        .notEmpty().withMessage("La contraseña debe tener al menos 4 caracteres")
        .isLength({ min: 4 })
      
    
]

let validationsLogueado = [
    body("mail")
        .custom(function(value){
            return db.Usuario.findOne({
                where: {mail: value},
            })
            .then(function(user){
                if (!user){
                    throw new Error("El mail ingresado no existe")
                }
            })
        }),
    body("contrasenia")
      .custom(function(value){
        return db.Usuario.findOne({
            where: {contrasenia: value}, 
    })
        .then(function(contrasenia){
            if (contrasenia == undefined){
                throw new Error("La contraseña ingresada no existe")
            }
        })
})
]

router.get("/id/:id", userController.profile);
router.get('/profile-edit', userController.profileEdit);
router.get('/profile', userController.profile);
router.get('/register', userController.register);
router.get('/login', userController.login);
router.post('/logout', userController.logout);


//POST
router.post('/register', validations, userController.store);
router.post('/login', validationsLogueado, userController.loginDatos);


module.exports = router;