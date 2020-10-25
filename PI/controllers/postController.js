const db = require('../database/models')


let postController = {
    detalle : function (req, res) {
        return res.render('detallePost', { title: 'Detalle Post' });
        },
    agregar : function (req, res) {
        return res.render('agregarPost');
        },
    store: function (req, res) {
        
    //    return res.send(req.body); //nos permite obtener la informacion que viene de un formulario
        let posteo = {                //Agregar si es que falta titulo!!!
            url_imagen: req.body.url_imagen,    //nombre de las columnas en la base de datos
            texto: req.body.texto,
        }

        db.Post.create(posteo);      // permite guardar la inforamcion dentro de la base de datos
                                    
         return res.redirect('/');    //a donde redirecciona al usuario luego de postear
        
     },
    };

     
    module.exports= postController;