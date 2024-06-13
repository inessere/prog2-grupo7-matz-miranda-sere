CREATE SCHEMA proyecto_integrador;

use proyecto_integrador;

CREATE TABLE usuarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    mail 				VARCHAR(250) 	NOT NULL,
    contrasenia 		VARCHAR(250) 	NOT NULL,
    fecha				DATE 			NOT NULL,
    numeroDocumento 	INT 			NOT NULL,
    fotodeperfil 		VARCHAR(250) 	NOT NULL,
    username            VARCHAR(250)    NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE productos (
/* 	nombreColumna 			tipoDato 			Restricciones */
    id 						INT 				UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idUsuario				INT   				UNSIGNED,	
    fotoproducto 			VARCHAR(250) 		NOT NULL,
    nombreProducto 			VARCHAR(250) 		NOT NULL,
    descripcionProducto 	VARCHAR(250) 		NOT NULL,
    createdAt 				TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 				TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt				TIMESTAMP 			DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
/* 	nombreColumna 		tipoDato 		Restricciones */
    id 					INT 			UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    idProducto			INT				UNSIGNED,
    idUsuario			INT				UNSIGNED,
    comentario 			VARCHAR(250) 	NOT NULL,
    createdAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ,
	updatedAt 			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt			TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id),
    FOREIGN KEY (idProducto) REFERENCES productos(id)
);

/****** USUARIOS ******/

INSERT INTO usuarios (id,mail,contrasenia,fecha,numeroDocumento,fotodeperfil,username,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,"isere@gmail.com","ines123","2005-03-01",46423504,"inesere.jpg","ine",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios (id,mail,contrasenia,fecha,numeroDocumento,fotodeperfil,username,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,"fmatz@gmail.com","fede123","2004-07-15",46025061,"federicomatz.jpg","fede",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios (id,mail,contrasenia,fecha,numeroDocumento,fotodeperfil,username,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,"mmiranda@gmail.com","machi123","2004-10-05",46213493,"fotomaria.jpeg","maria",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios (id,mail,contrasenia,fecha,numeroDocumento,fotodeperfil,username,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,"vaca@gmail.com","vaca123","2020-12-24",12345678,"default-image.png","vaca",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO usuarios (id,mail,contrasenia,fecha,numeroDocumento,fotodeperfil,username,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,"oli@gmail.com","oli123","2017-08-16",13579123,"default-image.png","oli",DEFAULT,DEFAULT,DEFAULT);

/****** POSTEOS ******/

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,1,"airpods.jpg","airpods","inalambricos y resistentes al agua",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,1,"computadora.jpg","computadora","cpu de 8 nucleos con 4 nucleos de rendimiento",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,2,"img-macbook-pro-2019.jpg","macbook","Monitor de escritorio",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,2,"ipad.jpg","ipad","ipad pro de 128gb",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,3,"ipencil.png","pencil","accesorio para el ipad",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,3,"iphone.jpg","iphone","iphone pro max 128gb",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,4,"ipod1.jpg","ipod","Dispositivo sin chip",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,4,"iwatch.jpg","apple watch","Reloj inteligente con pantalla tactil",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,"parlante.jpg","parlante inalambrico","parlante con conexion bluetooth",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO productos (id,idUsuario,fotoProducto,nombreProducto,descripcionProducto,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,"funda.jpg","funda de iphone","Funda de acrilico transparente marca apple",DEFAULT,DEFAULT,DEFAULT);

/****** COMENTARIOS ******/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,1,1,"amo apple, muy bueno",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,1,2,"Me funciona mal, prefiero windows",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,1,3,"me la quiero comprar, como hago?",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,2,1,"me encanta",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,2,2,"me funciona mal",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,2,3,"me la quiero comprar",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,3,1,"no me gusta",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,3,2,"me funciona bien",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,3,3,"¿donde la retiro?",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,4,1,"¿hacen envios?",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,4,2,"¿que metodos de pago tienen?",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,4,3,"¿la puedo cambiar?",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,3,"¿hay stock?",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,4,"la recomiendo",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,5,5,"es muy cara",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,6,5,"¿hay stock de esa?",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,6,2,"la recomiendo mucho",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,6,1,"buena relacion precio calidad",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,7,3,"increible producto",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,7,4,"la recomiendo al 100%",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,7,5,"no me puede faltar en casa",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,8,2,"no lo volveria a comprar",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,8,1,"un verdadero acierto",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,8,5,"muy util",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,9,3,"vino con fallas",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,9,4,"mejor compra del año",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,9,2,"aprovechen el hot sale",DEFAULT,DEFAULT,DEFAULT);

/***************************************************************************/
INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,10,1,"calidad insuperable",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,10,5,"es una estafa",DEFAULT,DEFAULT,DEFAULT);

INSERT INTO comentarios (id,idProducto,idUsuario,comentario,createdAt,updatedAt,deletedAt)
VALUES (DEFAULT,10,2,"muy caro para lo que es",DEFAULT,DEFAULT,DEFAULT);






