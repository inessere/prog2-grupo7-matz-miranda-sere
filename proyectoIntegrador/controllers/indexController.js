const db                = require("../db/index");

const controladorIndex  = {
    index: function(req, res) {
        res.render ("index", { "data": db});
    },
           
}

module.exports = controladorIndex;