const db = require("../db/index");
const controladorProfileEdit = {
    profileEdit: function(req, res) {
        res.render ("profile-edit", { "data": db

      });
      }
    }

module.exports = controladorProfileEdit;