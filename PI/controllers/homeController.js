const db = require('../database/models')
const user = db.User;
const post = db.Post;
const op = db.Sequelize.Op;   //para que funcione search (where)
const comment = db.Comment;





let homeController = {
feed : function (req, res) {
    post.findAll(
        {    
            include: [{association: 'user' }, {association: 'comments' , include: [{association: 'user'}] }, ],
             order:[ ['fecha_creacion', "ASC"] ]
        })
        .then(function(resultados){
            if(req.session.user == undefined){
                return res.redirect('/')
            } else {
            return res.render('feed', {resultados});
            }
            
        })
    
        .catch(function(error){
            console.log(error);
        })
    },


home : function (req, res) {
    if(req.session.user != undefined){
        return res.redirect('/feed')
    } else {
    return res.render('home');
    }
    
    },






    


searchh: function (req, res) {      // buscador a traves del formulario de busqueda
    let searchData = req.query.search;
   
    
    comment.findAll(
        {
            where: [
            { comentario : { [op.like] : "%" + "%#%" + searchData + "%"}}     
            ], 
            limit : 20,
            order:[
                 ['fecha_creacion', "ASC"]    
                ]


        })
        .then(function(resultados){
            if(req.session.user == undefined){
                return res.redirect('/')
            } else {
            return res.render('resultadoBusquedaH', {resultados, searchData})
            }
           
        })

            
        //    return res.render('resultadoBusqueda', {resultados});
        // })
    
        .catch(function(error){
            console.log(error);
        })
},

search: function (req, res) {      // buscador a traves del formulario de busqueda
    let searchData = req.query.search;
   
    
    user.findAll(
        {
            where: {

                          [op.or]:[
                {nombre: {[op.like] : "%" + searchData + "%"}},
                {email: {[op.like] : "%" + searchData + "%"}},
                
                ]
                
            }
        })
        .then(function(resultados){
            if(req.session.user == undefined){
                return res.redirect('/')
            } else {
            return res.render('resultadoBusqueda', {resultados, searchData})
            }
           
        })

            
        //    return res.render('resultadoBusqueda', {resultados});
        // })
    
        .catch(function(error){
            console.log(error);
        })
},




};

 
module.exports= homeController;