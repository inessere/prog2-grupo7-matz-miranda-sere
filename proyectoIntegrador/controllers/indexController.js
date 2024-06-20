const db = require("../database/models");

const controladorIndex = {
    index: function (req, res) {

        let criterio = {
            include: [
                { association: "usuario" },
                { association: "comentario" }
            ],
            order: [
                [
                    "createdAt", "DESC"
                ]
            ],
        };

        db.Producto.findAll(criterio)
            .then(function (results) {
                return res.render("index", { "data": results });

            }).catch(function (err) {
                return console.log(err);
            })

    }


}

module.exports = controladorIndex;
