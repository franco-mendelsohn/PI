const db = require('../database/models')
const user = db.User;
const post = db.Post;

let infoController = {
    miPerfil : function (req, res) {
        user.findAll()
        .then(function(resultados){
            return res.render('miPerfil', {resultados});
        })
        
        },


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