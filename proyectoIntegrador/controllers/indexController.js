const db = require("../database/models");

const controladorIndex  = {
    index: function(req, res) {

        let criterio = {
            include: [
                {association: "usuario"},
                {association: "comentario"}

            ]
        };

        db.Producto.findAll(criterio)
        .then(function(results){
            //console.log("DATA:", JSON.stringify(results,null,4));
            res.render ("index", {"data":results});
            
        }).catch(function(err) {
            return console.log(err);
        })
       
    }


}


module.exports = controladorIndex;
