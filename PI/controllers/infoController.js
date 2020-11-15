const db = require('../database/models')
const user = db.User;
const post = db.Post;

let infoController = {
    miPerfil : function (req, res) {
        


        user.findAll(
            { include: [{association: 'post' }]})
        .then(function(resultados){
            if(req.session.user == undefined){
                return res.redirect('/')
            } else {
            return res.render('miPerfil', {resultados});
            }
            
        })
        .catch(function(error){
            console.log(error); 
        })
       
        },


        esp : function (req, res) {      //configura detalle usuario segun el id
            let primaryKey = req.params.id;

            user.findByPk(primaryKey,
               { include: [{association: 'post' }, ],}
                )
            .then(function(resultados){
                if(req.session.user == undefined){
                    return res.redirect('/')
                } else {
                return res.render('detalleUsuario', {resultados});
                }
                
            })
            .catch(function(error){
                console.log(error);
            })
            

        },
        editarPerfil: function(req, res){
            return res.render ("perfilEdit")
            xd
        }
   
    

    }
    module.exports= infoController;