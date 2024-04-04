const controlador = {
    index: function(req, res) {
        res.render ("index");
      },
    login: function(req, res) {
        res.render ("login");
      },
    
    productAdd: function(req, res) {
      res.render ("product-add");
    },

    product: function(req, res) {
      res.render ("product");
    }, 

    profileEdit: function(req, res) {
      res.render ("profile-edit");
    }, 

    profile: function(req, res) {
      res.render ("profile");
    }, 

    register: function(req, res) {
      res.render ("register");
    }, 

    searchResults: function(req, res) {
      res.render ("search-results");
    }

   
}

module.exports = controlador;