const db = require("../db/index");
const controlador8 = {
    searchResults: function(req, res) {
        res.render ("search-results", { "data": db

      });
      }
    }

module.exports = controlador8;