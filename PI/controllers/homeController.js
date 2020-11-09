const db = require('../database/models')
const user = db.User;
const post = db.Post;
const op = db.Sequelize.Op;   //para que funcione search (where)
const comment = db.Comment;
// const bcrypt = require('bcryptjs');




let homeController = {
home : function (req, res) {
    post.findAll(
        {    
            include: [{association: 'user' }, {association: 'comments' , include: [{association: 'user'}] }, ],
             order:[ ['fecha_creacion', "ASC"] ]
        })
        .then(function(resultados){
            // return res.send(resultados);
            return res.render('home', {resultados});
        })
    
        .catch(function(error){
            console.log(error);
        })
    },


futuro : function (req, res) {
    return res.render('futuroHome', { title: 'Acqua'} ) 
    },




all : function (req, res) {        //trae todo lo que esta en la base
    user.findAll(
    {    
        // limit : 1,                 //traeme solo
        // offset : 1,               //saltea x
        // order:[
        //     ['nombre', "ASC"]    //ordenar los datos
        // ]
    })
    .then(function(resultados){
       return res.render('resultadoBusqueda', {resultados});
    })

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
                {email: {[op.like] : "%" + searchData + "%"}}
                ]
                
            }
        })
        .then(function(resultados){
           return res.render('resultadoBusqueda', {resultados, searchData})
        })

            
        //    return res.render('resultadoBusqueda', {resultados});
        // })
    
        .catch(function(error){
            console.log(error);
        })
},


// .then( function(user){
//     //El email no está en la base de datos
//     if(user == null){
//         return res.send("Email incorrecto");
//     } else if (bcrypt.compareSync(req.body.password, user.password) == false ){
//         //EL email existe pero la contraseña está mal
//         return res.send("Contraseña equivocada")
//     } else if (bcrypt.compareSync(req.body.password, user.password)){
//         //Coinciden las contraseñas
//         req.session.user = user;



};





// pruebas
 
module.exports= homeController;