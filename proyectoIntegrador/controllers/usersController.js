const db = require("../database/models");

const controladorUsers = {
    profile: function(req, res) {

       let id = req.params.id
        db.Usuario.findByPk(id)
        .then(function (result) {
          return res.send(result);
        }).catch(function (err) {
          return console.log(err); ;
        })

        
    },

    login: function (req, res) {
      // res.render("login");
    },

    profileEdit: function(req, res) {
      // res.render ("profile-edit", { "data": db});
    }, 

    register: function(req, res) {
      // res.render ("register");
    }
  
  }


module.exports = controladorUsers;