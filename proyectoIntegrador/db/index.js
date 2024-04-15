const mercadoLiebre =
{
    usuario: {
        email: "briangomez@udesa.edu.ar",
        usuario: "Brian Gomez",
        contrasena: "luisnavas",
        nacimiento: "15/03/2004",
        documento: "23423765",
        fotoDePerfil: "/images/fotonueva.jpg"
    },
    productos: [

        {   fotoproducto: "/images/products/ipod1.jpg",
            nombreproducto: "Ipod",
            id: 1,
            descripcion: "Dispositivo sin chip de 128gb, batería recargable, conexión USB y bluetooth.",
            comentarios: [
                {
                    nombreusuario: "Ines: ",
                    comentarioText: " Amo apple, muy bueno",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Maria: ",
                    comentarioText: "Me funciona mal, prefiero windows",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Federico: ",
                    comentarioText: "Me la quiero comprar, como hago?",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/airpods.jpg",
            nombreproducto: "Airpods",
            id: 2,
            descripcion: "Inalambricos y resistentes al agua",
            comentarios: [
                {
                    nombreusuario: "Carlos",
                    comentarioText: "Excelentes auriculares",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Laura",
                    comentarioText: "No me gusta, prefiero Android",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Pedro",
                    comentarioText: "Lo recomiendo totalmente, gran calidad de cámara",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/ipad.jpg",
            nombreproducto: "Ipad",
            id: 3,
            descripcion: "Ipad pro 128gb",
            comentarios: [
                {
                    nombreusuario: "Ana",
                    comentarioText: "Me encanta, la mejor cámara que he probado",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "David",
                    comentarioText: "No lo recomiendo, problemas de batería",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Elena",
                    comentarioText: "Funciona muy bien, fácil de usar",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/ipencil.png",
            nombreproducto: "Ipencil",
            id: 4,
            descripcion: "Accesorio para el ipad",
            comentarios: [
                {
                    nombreusuario: "Raul",
                    comentarioText: "Increíbles, se escuchan muy bien",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Sara",
                    comentarioText: "No me convencen, prefiero los auriculares con cable",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Diego",
                    comentarioText: "Muy cómodos, los uso todo el día",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/iphone.jpg",
            nombreproducto: "Iphone",
            id: 5,
            descripcion: "Iphone Pro Max 128gb",
            comentarios: [
                {
                    nombreusuario: "Julia",
                    comentarioText: "Muy útil para controlar dispositivos del hogar",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Mario",
                    comentarioText: "No me gusta, la voz de Alexa es molesta",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Eva",
                    comentarioText: "Lo uso para escuchar música, funciona genial",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/iwatch.jpg",
            nombreproducto: "Apple watch",
            id: 6,
            descripcion: "Reloj inteligente con pantalla tactil",
            comentarios: [
                {
                    nombreusuario: "Miguel",
                    comentarioText: "Una maravilla, los juegos se ven increíbles",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Isabel",
                    comentarioText: "Demasiado cara, prefiero la PS4",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Antonio",
                    comentarioText: "La mejor consola que he tenido, vale la pena",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/computadora.jpg",
            nombreproducto: "Computadora de escritorio",
            id: 7,
            descripcion: "Monitor de escritorio",
            comentarios: [
                {
                    nombreusuario: "Laura",
                    comentarioText: "Me ayuda mucho a mantenerme activa",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Juan",
                    comentarioText: "No es muy preciso en las mediciones",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Carolina",
                    comentarioText: "Lo uso para controlar mi salud, funciona bien",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/img-macbook-pro-2019.jpg",
            nombreproducto: "Macbook",
            id: 8,
            descripcion: "CPU de 8 núcleos con 4 núcleos de rendimiento",
            comentarios: [
                {
                    nombreusuario: "Santiago",
                    comentarioText: "Las fotos son impresionantes, gran calidad",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Camila",
                    comentarioText: "No me gusta el diseño, prefiero otros modelos",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Lucas",
                    comentarioText: "Lo recomiendo, buen rendimiento y software",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/funda.jpg",
            nombreproducto: "Funda de Iphone",
            id: 9,
            descripcion: "Funda de acrilico transparente marca Apple",
            comentarios: [
                {
                    nombreusuario: "Valeria",
                    comentarioText: "Funcionan muy bien para dormir, son cómodos",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Roberto",
                    comentarioText: "No noto diferencia en la calidad de sueño",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Marina",
                    comentarioText: "Me ayudan a conciliar el sueño, los recomiendo",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        },
        { 
            fotoproducto: "/images/products/parlante.jpg",
            nombreproducto: "Parlante inalambrico",
            id: 10,
            descripcion: "Parlante con conexión Bluetooth",
            comentarios: [
                {
                    nombreusuario: "Hugo",
                    comentarioText: "Una bestia en rendimiento, juegos fluidos",
                    imagenPerfil: "/images/users/inesere.jpg"
                },
                {
                    nombreusuario: "Ana",
                    comentarioText: "Demasiado grande, prefería el diseño anterior",
                    imagenPerfil: "/images/users/fotomaria.jpeg"
                },
                {
                    nombreusuario: "Luisa",
                    comentarioText: "La mejor consola que he tenido, supera mis expectativas",
                    imagenPerfil: "/images/users/federicomatz.jpg"
                }
            ]
        }
    ]
}



module.exports = mercadoLiebre

