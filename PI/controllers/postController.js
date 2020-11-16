const { localsName } = require('ejs');
const { locals } = require('../app');
const db = require('../database/models');
const post = db.Post;


let postController = {
    detalle : function (req, res) {      //configura detalle usuario segun el id
        let primaryKey = req.params.id;
    
        post.findByPk(primaryKey,
            { include: [{association: 'user' }, {association: 'comments', include: [{association: 'user'}] }, ],})
        .then(function(resultados){
            if(req.session.user == undefined){
                return res.redirect('/')
            } else {
            return res.render('detallePost', {resultados});
            }
            
        })
        .catch(function(error){
        console.log(error);

        
    })

 },


     agregar : function (req, res) {
        if(req.session.user == undefined){
            return res.redirect('/')
        } else {
        return res.render('agregarPost');
        }
        
        },
    store: function (req, res) {
        
    //   return res.send(req.body); //nos permite obtener la informacion que viene de un formulario
        let posteo = {               
            url_imagen: req.body.url_imagen,    //nombre de las columnas en la base de datos
            texto: req.body.texto,
            user_id: res.locals.user.id,

        }

        post.create(posteo);
       // permite guardar la inforamcion dentro de la base de datos          
         return res.redirect('/feed');    //a donde redirecciona al usuario luego de postear
    },
    destroy: function(req,res){
        let idAborrar = req.params.id;

        db.Post.destroy({
            where: {
                id: idAborrar
            }
        });
        return res.redirect("/feed")
    },
    edit: function(req,res){
        let idAeditar = req.params.id;
        post.findByPk(idAeditar)
        .then(function(post){
            
            return res.render("postEdit", {post});
        })
        .catch(function(error){
            console.log(error);
        })
   
    },
    update: function(req,res){
        
        // let postUpdate = req.body.texto
        db.Post.update({
            texto: req.body.texto
        },
        {
            where: {
                id: req.params.id,
            }
        })

        return res.redirect("/feed")
    },

}
     
    module.exports= postController;