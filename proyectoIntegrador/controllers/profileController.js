const db = require("../db/index");

const controladorProfile = {
    profile: function(req, res) {
        res.render ("profile" ,{ "data": db

      });
      }
    }

module.exports = controladorProfile;