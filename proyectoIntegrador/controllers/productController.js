const db = require("../db/index");
const controlador4 = {
    product: function(req, res) {
        res.render ("product", { "data": db 
      });
      }
    }

module.exports = controlador4;