let infoController = {
    usuario : function (req, res) {
        return res.render('detalleUsuario', { title: 'Detalle Usuario' });
        },
    miPerfil : function (req, res) {
        return res.render('miPerfil', { title: 'Mi Perfil' });
        },
    busqueda: function (req, res) {
            return res.render('resultadoBusqueda', { title: 'Rsultado Busqueda' });
        },
    };

     
    module.exports= infoController;