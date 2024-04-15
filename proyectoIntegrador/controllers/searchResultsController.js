const db = require("../db/index");
const controladorSearch = {
    searchResults: function(req, res) {
        res.render ("search-results", { "data": db

      });
      }
    }

module.exports = controladorSearch;