const db = require("../database/models");
const Producto =db.Producto;

const controladorIndex  = {
    index: function(req, res) {
        Producto.findAll().then(function(results) {
            return res.send(results)
            
        })
        // res.render ("index", { "data": db});
    },


}


module.exports = controladorIndex;
