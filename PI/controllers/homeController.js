// pruebas
const db = require('../database/models')
const user = db.User;
const post = db.Post;
const op = db.Sequelize.Op;   //para que funcione search (where)
// pruebas



let homeController = {
home : function (req, res) {
    post.findAll(
        {    
            order:[
             ['fecha_creacion', "ASC"] ]
        })
        .then(function(resultados){
           return res.render('home', {resultados});
        })
    
        .catch(function(error){
            console.log(error);
        })
    },




futuro : function (req, res) {
    return res.render('futuroHome', { title: 'Acqua'} , ) ;
    },
search: function (req, res) {
    let searchData = req.query;
    return res.send(searchData.search);
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

esp : function (req, res) {      //configura detalle usuario segun el id
    let primaryKey = req.params.id;

    user.findByPk(primaryKey)
    .then(function(resultados){
        return res.render('detalleUsuario', {resultados});
    })
    .catch(function(error){
    console.log(error);
})
    },
    
buscar: function (req, res) {      //buscar algo que contenga algo definido en searchData
    let searchData = req.params.searchData;
    
    user.findAll(
        {
            where: [
                {nombre: {[op.like] : "%" + searchData + "%"} }
            ]
        })
        .then(function(resultados){
           return res.render('search', {resultados});
        })
    
        .catch(function(error){
            console.log(error);
        })
},

search: function (req, res) {      // buscador a traves del formulario de busqueda
    let searchData = req.query.search;
   
    
    user.findAll(
        {
            where: [
                {nombre: {[op.like] : "%" + searchData + "%"} }
            ]
        })
        .then(function(resultados){
           return res.render('resultadoBusqueda', {resultados});
        })
    
        .catch(function(error){
            console.log(error);
        })
},


};





// pruebas
 
module.exports= homeController;