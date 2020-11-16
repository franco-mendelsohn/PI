const db = require('../database/models')
const user = db.User;
const post = db.Post;
let infoController = {
    miPerfil : function (req, res) {
        


        post.findAll({
            where: [
                {user_id: req.session.user.id}
            ]
        })
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
        editarPerfil: function(req,res){
            let userAeditar = req.params.id;
            user.findByPk(userAeditar)
                .then(function(user){
             return res.render ('perfilEdit', {user});
             })
                .catch(function(error){
                console.log(error);
            })
        
            
            
        },
        // update: function(req,res){
        
        //     // let postUpdate = req.body.texto
        //     db.user.update({
        //         nombre: req.body.nombre,
        //         apellido: req.body.apellido,
        //         username: req.body.username,
        //         lema: req.body.lema,

        //     },
        //     {
        //         where: {
        //             id: req.params.id,
        //         }
        //     })
    
        //     return res.redirect("/feed")
        // },
    }
    module.exports= infoController;