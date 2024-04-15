const db = require("../db/index");

const controladorUsers = {
    profile: function(req, res) {
        res.render ("profile" ,{ "data": db});
    },

    login: function (req, res) {
      res.render("login");
    },

    profileEdit: function(req, res) {
      res.render ("profile-edit", { "data": db});
    }, 

    register: function(req, res) {
      res.render ("register");
    }
  
  }

module.exports = controladorUsers;