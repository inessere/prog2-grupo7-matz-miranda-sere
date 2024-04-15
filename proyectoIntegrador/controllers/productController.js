const db = require("../db/index");
const controladorProduct = {
    product: function(req, res) {
        res.render ("product", { "data": db 
      });
      }
    }

module.exports = controladorProduct;