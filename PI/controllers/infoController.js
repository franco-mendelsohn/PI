const db = require('../database/models')
const user = db.User;

let infoController = {
    miPerfil : function (req, res) {
        return res.render('miPerfil', { title: 'Mi Perfil' });
        },
    busqueda: function (req, res) {
            return res.render('resultadoBusqueda', { title: 'Rsultado Busqueda' });
        },
    especifico: function (req, res) {
            let primaryKey = 5;
            user.findByPk(primaryKey)
            .then(function(resultados){
                return res.render('detalleUsuario', {resultados});
            })
    .catch(function(error){
            console.log(error);
        })
        }
    };

     
    module.exports= infoController;