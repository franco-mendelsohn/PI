const { localsName } = require('ejs');
const { locals } = require('../app');
const db = require('../database/models');
const comment = db.Comment;
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

 hola: function (req, res) {
                                                    //   return res.send(req.body); //nos permite obtener la informacion que viene de un formulario
        let comenta = {               
            comentario: req.body.comentario,    //nombre de las columnas en la base de datos
            user_id: res.locals.user.id,
            post_id: req.body.idPost,
            fecha_creacion: db.sequelize.literal("CURRENT_DATE"),
        }
        
        comment.create(comenta)
        
        
        return res.redirect('/post/detalle/' + req.body.idPost );
      
        
       // permite guardar la inforamcion dentro de la base de datos          
           //a donde redirecciona al usuario luego de postear
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
         return res.redirect('/info/miPerfil');    //a donde redirecciona al usuario luego de postear
    },
    destroy: function(req,res){
        let idAborrar = req.params.id;

        db.Post.destroy({
            where: {
                id: idAborrar
            }
        });
        return res.redirect("/info/miPerfil")
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

        return res.redirect("/info/miPerfil")
    },

}
     
    module.exports= postController;