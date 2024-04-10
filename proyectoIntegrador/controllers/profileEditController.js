const db = require("../db/index");
const controlador6 = {
    profileEdit: function(req, res) {
        res.render ("profile-edit", { "data": db

      });
      }
    }

module.exports = controlador6;