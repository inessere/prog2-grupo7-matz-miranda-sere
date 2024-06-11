module.exports= function (sequelize,dataTypes) {
    let alias = "Usuario";
    let cols={
        id:{
            autoIncrement:true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        mail:{
            type: dataTypes.STRING
        }, 
        username:{
            type: dataTypes.STRING
        },
        contrasenia:{
            type: dataTypes.STRING
        },
        fecha:{
            type: dataTypes.DATE
        },
        numeroDocumento:{
            type: dataTypes.INTEGER
        },
        fotodeperfil:{
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
        tableName: "usuarios",
        timestamps: false,
        underscored: false
    }

    let Usuarios = sequelize.define(alias,cols,config);
    Usuarios.associate = function(models){
        Usuarios.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "idUsuario"
        });
        Usuarios.hasMany(models.Comentario,{
            as: "comentario",
            foreignKey: "idUsuario"
        });

    }
    return Usuarios;
}