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
            return console.log(err);
        })
    },
    
    showFormCreate: function(req, res) {
        return res.render ("product-add");
    },

    productEdit: function(req, res) {
        let id = req.params.id
        Producto.findByPk(id)
        .then(function (data) {
            return res.render ("productEdit", {data: data});   
        })
        .catch(function (err) {
            return console.log(err);
        })
       
    },

    searchResults: function(req, res) {
       res.render ("search-results", { "data": db});
    },
    store:function (req,res) {
    return res.redirect("/index")
        
    }, 
    // este es para eliminar un producto, con el id me fijo que el producto pertenezca al mismo usuario que está logueado
    delete: function(req, res) {
        let idParaEliminar = req.body.id;
    
        let filtro = {
          where: [{id: idParaEliminar }]
        }
    
        db.Movie.destroy(filtro)
        .then((result) => {
          return res.redirect("/index");
        }).catch((err) => {
          return console.log(err);
        });
    
      }
    
}   


module.exports = controladorProduct;