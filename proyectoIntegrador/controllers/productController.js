const { Association } = require("sequelize");
const db = require("../database/models");
const Producto = db.Producto;
const { Op } = require('sequelize');
const { validationResult } = require("express-validator");
const controladorProduct = {


  detalle: function (req, res) {
    let id = req.params.id
    let criterio = {
      include: [
        {
          association: "comentario", include: [
            { association: "usuario" }
          ]
        },
        { association: "usuario" }


      ]
    }
    Producto.findByPk(id, criterio)
    .then(function (data) {
      db.Comentario.findAll({
        where:{idProducto:id},
        order:[["createdAt","DESC"]],
        include:[{association:"usuario"}]
      })
      .then(function (comentario) {
        console.log(comentario , "machiiii");
        return res.render("product", { comentario:comentario, data: data });
      })
      .catch(function (err) {
        return console.log(err);
      })
  })},

  showFormCreate: function (req, res) {
    return res.render("product-add");
  },

  productEdit: function (req, res) {
    let id = req.params.id
    Producto.findByPk(id)
      .then(function (data) {
        return res.render("productEdit", { data: data });
      })
      .catch(function (err) {
        return console.log(err);
      })

  },

  showFormUpdate: function (req, res) {
    let id = req.params.id;
    db.Producto.findByPk(id)
      .then((result) => {
        return res.render("productEdit", { data: result });
      }).catch((err) => {
        return console.log(err);
      });
  },

  update: function (req, res) {
    let form = req.body;
    console.log(form);
    let filtro = { where: [{ id: form.id }] };
    db.Producto.update(form, filtro)
      .then((result) => {
        return res.redirect("/products/id/" + form.id);

      }).catch((err) => {
        return console.log(err);
      });

  },

  searchResults: function (req, res) {
    let busqueda = req.query.search;
    Producto.findAll({
        include: [
            {
                association: "comentario",
                include: [
                    { association: "usuario" }
                ]
            },
            { association: "usuario" }
        ],
        where: {
            [Op.or]: [
                {
                    nombreProducto: {
                        [Op.like]: `%${busqueda}%`
                    }
                },
                {
                    descripcionProducto: {
                        [Op.like]: `%${busqueda}%`
                    }
                }
            ]
        },
        order: [["createdAt", "DESC"]]

    })
        .then(function (data) {
            if (data.length > 0) {
                res.render("search-results", { "data": data });

            } else {

                res.render("search-results", { "data": "", message: "Ocurrió un error al realizar la búsqueda" });
            }
        })
        .catch(function (err) {
            console.log(err);
        })
      },

  store: function (req, res) {
    let errors = validationResult(req)
    if (errors.isEmpty()) {
      let form = req.body
      let nuevoProducto = {
        idUsuario: req.session.user.id,
        fotoproducto: form.fotoProducto,
        nombreProducto: form.nombreProducto,
        descripcionProducto: form.descripcion
      }
      console.log(nuevoProducto);

      db.Producto.create(nuevoProducto)
        .then(
          function (results) {
            return res.redirect("/index");
          }
        )
        .catch((err) => {
          return console.log(err);
        })
    } else {
      res.render("product-add", { errors: errors.mapped(), old: req.body });
    }

  },
  // este es para eliminar un producto, con el id me fijo que el producto pertenezca al mismo usuario que está logueado
  delete: function (req, res) {
    let idParaEliminar = req.body.id;

    let filtro = {
      where: [{ id: idParaEliminar }]
    }
    db.Movie.destroy(filtro)
      .then((result) => {
        return res.redirect("/index");
      }).catch((err) => {
        return console.log(err);
      });

  },
  storeComentario: function (req, res) {
    let errors = validationResult(req);
    let form= req.body
    if (errors.isEmpty()) {
      let comentario = {
        comentario: form.comentario,
        idUsuario: req.session.user.id,
        idProducto: req.params.id
      }
      db.Comentario.create(comentario)
        .then(function (result) {
          return res.redirect("/index")
        }).catch(function (err) {
          console.log(err);
  
        })
      }else{
          let id = req.params.id
          let criterio = {
            include: [
              {
                association: "comentario", 
                include: [
                  { association: "usuario" }
                ]
              },
              { association: "usuario" }
            ]
          };
          Producto.findByPk(id, criterio)
          .then(function (data) {
            return db.Comentario.findAll({
              where:{idProducto:id},
              order:[["createdAt","DESC"]],
              include:[{association:"usuario"}]
          }).then(function (comentarios) {               
              return res.render("product",{ 
                comentario:comentarios,
                data:data, 
                errors: errors.mapped(), 
                old:req.body 
              });
            });
          })
          .catch(function (err) {
              return console.log(err);
          })
      }}}

      module.exports = controladorProduct;