const db = require("../db/index");

const controladorProductAdd = {
    productAdd: function(req, res) {
        res.render ("product-add",{ "data": db

      } );
      }
    }

module.exports = controladorProductAdd;