const db = require("../db/index");
const controladorProduct = {


    product: function(req, res) {
        res.render ("product", {"data": db});
    },
    
    productAdd: function(req, res) {
        res.render ("product-add",{ "data": db});
    },

    searchResults: function(req, res) {
      res.render ("search-results", { "data": db});
    }
    
}   

module.exports = controladorProduct;