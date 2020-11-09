const db = require('../database/models')
const user = db.User;
const post = db.Post;

let infoController = {
    // miPerfil : function (req, res) {
    //     return res.render('miPerfil', { title: 'Mi Perfil' });
    //     },


        esp : function (req, res) {      //configura detalle usuario segun el id
            let primaryKey = req.params.id;

            user.findByPk(primaryKey,
               { include: [{association: 'post' }, ],}
                )
            .then(function(resultados){
                // return res.send(resultados);
                return res.render('detalleUsuario', {resultados});
            })
            .catch(function(error){
                console.log(error);
            })
            

        },
   
    

    }
    module.exports= infoController;