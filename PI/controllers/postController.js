let postController = {
    detalle : function (req, res) {
        return res.render('detallePost', { title: 'Detalle Post' });
        },
    agregar : function (req, res) {
        return res.render('agregarPost');
        },
    store: function (req, res) {
        
    //    return res.send(req.body); //nos permite obtener la informacion que viene de un formulario
        let post = {                //Agregar si es que falta titulo!!!
            url_imagen: req.body.url_imagen,    //nombre de las columnas en la base de datos
            texto: req.body.texto,
        }
     },
    };

     
    module.exports= postController;