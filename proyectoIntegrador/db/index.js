const mercadoLiebre =
{
    usuario: {
        email: "briangomez@udesa.edu.ar",
        usuario: "Brian Gomez",
        contrasena: "luisnavas",
        nacimiento: "15/03/2004",
        documento: "23423765",
        fotoDePerfil: "images/fotonueva.jpg"
    },
    productos: [
        {   fotoproducto: "images/img-macbook-pro-2019.jpg",
            nombreproducto: "computadora",
            descripcion: "CPU de 8 núcleos con 4 núcleos de rendimiento",
            comentarios: [
                {
                    nombreusuario: "Ines",
                    comentarioText: "amo apple, muy bueno",
                    imagenPerfil: "/images/inesere.jpg"
                },
                {
                    nombreusuario: "Maria",
                    comentarioText: "Me funciona mal, prefiero windows",
                    imagenPerfil: "/images/mariamiranda.jpg"
                },
                {
                    nombreusuario: "Federico",
                    comentarioText: "me la quiero comprar, como hago?",
                    imagenPerfil: "/images/federicomatz.jpg"
                }
            ]
        }

    ]

}

module.exports = mercadoLiebre

