module.exports= function (sequelize,dataTypes) {
    let alias = "Producto";
    let cols={
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario:{
            type: dataTypes.STRING
        },
        fotoproducto:{
            type: dataTypes.STRING
        },
        nombreProducto:{
            type: dataTypes.STRING
        },
        descripcionProducto:{
            type: dataTypes.STRING
        },
        createdAt:{
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }

    }
    let config={
        tableName: "productos",
        timestamps: false,
        underscored: false
    }

    let Productos = sequelize.define(alias,cols,config);
    Productos.associate = function (models){
        Productos.belongsTo(models.Usuario, {
            as: "usuario", 
            foreignKey: "idUsuario"
        });

        Productos.hasMany(models.Comentario,{
            as: "comentario",
            foreignKey: "idProducto"
        });
    }

    return Productos;
}