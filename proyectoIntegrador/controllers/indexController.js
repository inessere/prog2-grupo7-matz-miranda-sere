const db = require("../db/index");

const controlador = {
    index: function(req, res) {
        res.render ("index", { "data": db

        });
      }
}


module.exports = controlador;