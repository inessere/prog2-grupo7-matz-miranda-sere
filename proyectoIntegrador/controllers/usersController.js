const bcrypt = require('bcryptjs');
const db = require("../database/models");
const { validationResult } = require("express-validator")


const controladorUsers = {
  profile: function (req, res)  {

    let id = req.params.id
    db.Usuario.findByPk(id)
      .then(function (result) {
        return res.send(result);
      }).catch(function (err) {
        return console.log(err);;
      })
  },

  login: (req, res) => {
     res.render("login");
  },

  profileEdit: (req, res) =>{
     res.render ("profile-edit");
  },

  register: (req, res) =>{
    return res.render("register")
  },

  store: (req, res) => {

    let errors = validationResult(req);
    if (errors.isEmpty()){
      let form = req.body; 
      let dni = form.dni 
      if (dni === ''){
          dni = 0
      }
// Como el tipo de dato de dni y de fecha no permitian el valor nulo ya que lo tomaban como un string cuando lo que pedian era un tipo de dato entero, fijamos un valor predeterminado de 0 para poder evitar ese error.
      let fecha = form.cumpleanios
      if (fecha === ''){
          fecha = 0
      }

      let registro = {
        username: form.usuario,
        mail: form.email,
        contrasenia: bcrypt.hashSync(form.contrasenia, 10),
        fecha: fecha,
        numeroDocumento: dni,
        fotodeperfil: form.foto}

      db.Usuario.create(registro)
      .then((result) => {
        return res.redirect("/users/login");
         
      }).catch((err) => {
         return console.log(err);
      });
    }else{
      res.render("register",{errors:errors.mapped(), old:req.body });
    }
    
    

    

  }
}





module.exports = controladorUsers;