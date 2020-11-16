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
        updatePerfil: function(req,res){
            let useredit ={
                Nombre: req.body.nombre,
                Apellido: req.body.apellido,
                Lema: req.body.lema,
                Username: req.body.username,
                id: req.body.id
            }
                
              //innecesario repetir el código pero lo dejo ahí mientras funcione
             db.User.update({
                 nombre: req.body.nombre,
                 apellido: req.body.apellido,
                 lema: req.body.lema,
                 username: req.body.username,

             },
             {
                 where: [
                    {id: req.session.user.id}
                ]
             })
            req.session.user=user;
            return res.redirect("/info/miPerfil")
            
        }, 
        
    }

    
    module.exports= infoController;
    