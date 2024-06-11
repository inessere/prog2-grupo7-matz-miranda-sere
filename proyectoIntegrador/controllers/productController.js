const { Association } = require("sequelize");
const db = require("../database/models");
const Producto =db.Producto;
const controladorProduct = {


    detalle: function(req, res) {
    let id = req.params.id
        let criterio = {
            include:[
                {association: "comentario", include:[
                    {association: "usuario"}
                ]},
                {association: "usuario"}
                    
              
            ]
        }
        Producto.findByPk(id,criterio)
        .then(function (data) {
          return res.render ("product", {data: data});   
        })
        .catch(function (err) {
            return 
        })
    },
    
    showFormCreate: function(req, res) {
        return res.render ("product-add");
    },

    searchResults: function(req, res) {
       res.render ("search-results", { "data": db});
    },
    store:function (req,res) {
    return res.redirect("/index")
        
    }
    
}   


module.exports = controladorProduct;