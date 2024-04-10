const db = require("../db/index");

const controlador3 = {
    productAdd: function(req, res) {
        res.render ("product-add",{ "data": db

      } );
      }
    }

module.exports = controlador3;