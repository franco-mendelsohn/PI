let postController = {
    detalle : function (req, res) {
        return res.render('detallePost', { title: 'Detalle Post' });
        },
    agregar : function (req, res) {
        return res.render('agregarPost', { title: 'Agregar Post' });
        },
    
    };

     
    module.exports= postController;