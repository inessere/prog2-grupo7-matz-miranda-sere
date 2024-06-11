const { Association } = require("sequelize");
const db = require("../database/models");

const controladorIndex  = {
    index: function(req, res) {

        let criterio = {
            include: [
                {association: "usuario"},
                {association: "comentario"},

            ]
        }
        
        db.Producto.findAll(criterio)
        .then(function(results) {
            return res.send(results)
            
        }).catch(function(err) {
            return console.log(err);
        })
         res.render ("index", { "data": db});
    },


}


module.exports = controladorIndex;
