const db = require("../db/index");

const controlador5 = {
    profile: function(req, res) {
        res.render ("profile" ,{ "data": db

      });
      }
    }

module.exports = controlador5;