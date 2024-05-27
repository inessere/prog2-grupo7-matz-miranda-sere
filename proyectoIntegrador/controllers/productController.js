const db = require("../database/models");
const Producto =db.Producto;
const controladorProduct = {


    product: function(req, res) {
        // res.render ("product", {"data": db});
    },
    
    productAdd: function(req, res) {
        // res.render ("product-add",{ "data": db});
    },

    searchResults: function(req, res) {
    //   res.render ("search-results", { "data": db});
    }
    
}   

const movie = db.Movie;
module.exports = controladorProduct;