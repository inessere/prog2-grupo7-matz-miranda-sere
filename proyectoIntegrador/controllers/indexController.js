const db = require("../database/models");

const controladorIndex  = {
    index: function(req, res) {
        db.Producto.findAll()
        .then(function(results) {
            return res.send(results)
            
        }).catch(function(err) {
            return console.log(err);
        })
        // res.render ("index", { "data": db});
    },


}


module.exports = controladorIndex;
