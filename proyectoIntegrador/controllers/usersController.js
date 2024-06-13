const bcrypt = require('bcryptjs');
const db = require("../database/models");
const { validationResult } = require("express-validator")


const controladorUsers = {
  profile: function (req, res) {

    let id = req.params.id
    db.Usuario.findByPk(id)
      .then(function (result) {
        return res.send(result);
      }).catch(function (err) {
        return console.log(err);;
      })
  },

  profileEdit: (req, res) => {
    res.render("profile-edit");
  },


  register: (req, res) => {
    return res.render("register")
  },//originallllll

  /*register: (req, res)=>{

    if (req.session.user != undefined) {
        return res.redirect("/index");
    } else {
        return res.render("register")
    }},*/

  store: (req, res) => {

    let errors = validationResult(req);
    if (errors.isEmpty()) {
      let form = req.body;
      let dni = form.dni
      if (dni === '') {
        dni = 0
      }
      // Como el tipo de dato de dni y de fecha no permitian el valor nulo ya que lo tomaban como un string cuando lo que pedian era un tipo de dato entero, fijamos un valor predeterminado de 0 para poder evitar ese error.
      let fecha = form.cumpleanios
      if (fecha === '') {
        fecha = 0
      }

      let registro = {
        username: form.usuario,
        mail: form.email,
        contrasenia: bcrypt.hashSync(form.contrasenia, 10),
        fecha: fecha,
        numeroDocumento: dni,
        fotodeperfil: form.foto
      }

      db.Usuario.create(registro)
        .then((result) => {
          return res.redirect("/users/login");

        }).catch((err) => {
          return console.log(err);
        });
    } else {
      res.render("register", { errors: errors.mapped(), old: req.body });
    }
  },
  //originallllll
  login: (req, res) => {
    res.render("login")
  },



  loginDatos: (req, res) => {
    let errors = validationResult(req);

    /*let form = req.body;
    let filtro = {
      where: [{ mail: form.mail }]
    };

    db.Usuario.findOne(filtro)
      .then((user) => {
        if (user){
          let check = bcrypt.compareSync(form.contrasenia, result.contrasenia);
          if (check) {
            req.session.user = user;
            return res.redirect("/index")
          } else {
        return res.render("login", {errors:errors.mapped(), old:req.body});}

        }else{
          return res.render("login", {errors:errors.mapped(), old:req.body})
        }
        
        
      
        
      })
      .catch((err) => {
        return console.log(err);
      })
    //}else {
      //res.render("login", {errors:errors.mapped(), old:req.body});
  }}}*/
    // Validar los errores de validación utilizando express-validator




    let form = req.body;

    let filtro = {
      where: [{ mail: form.mail }]
    };
    db.Usuario.findOne(filtro)
      .then((result) => {
        if (result == null) return res.render("login", { errors: errors.mapped(), old: req.body });

        let check = bcrypt.compareSync(form.contrasenia, result.contrasenia);
        if (check) {
          req.session.user = result;
          /* aca empieza lo de cookies, que lo guarde en cookie si el usuario lo tildo*/
          if (form.recordarme != undefined) {
            res.cookie("userId", result.id, { maxAge: 1000 * 60 * 60 });

          } /*aca termina lo de cookies, cualquier cosa lo borro*/
          return res.redirect("/index");
        }
        else {
          res.render("login", { errors: errors.mapped(), old: req.body });
        }
      }).catch((err) => {
        return console.log(err);
      })
  },
  logout: function (req, res) {
    req.session.destroy();
    res.clearCookie("userId")
    return res.redirect("/users/login")
  }


}













module.exports = controladorUsers;