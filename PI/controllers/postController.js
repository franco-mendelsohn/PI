const db = require('../database/models');
const post = db.Post;


let postController = {
    detalle : function (req, res) {      //configura detalle usuario segun el id
        let primaryKey = req.params.id;
    
        post.findByPk(primaryKey,
            { include: [{association: 'user' }, {association: 'comments', include: [{association: 'user'}] }, ],})
        .then(function(resultados){
            return res.render('detallePost', {resultados});
        })
        .catch(function(error){
        console.log(error);

        
    })

 },


     agregar : function (req, res) {
        return res.render('agregarPost');
        },
    store: function (req, res) {
        
    //   return res.send(req.body); //nos permite obtener la informacion que viene de un formulario
        let posteo = {               
            url_imagen: req.body.url_imagen,    //nombre de las columnas en la base de datos
            texto: req.body.texto,
        }

        post.create(posteo)      // permite guardar la inforamcion dentro de la base de datos
                                    
         return res.redirect('/');    //a donde redirecciona al usuario luego de postear
    },
    
    };

     
    module.exports= postController;