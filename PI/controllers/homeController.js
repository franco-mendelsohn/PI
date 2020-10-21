const db = require('../database/models')
const user = db.User;




let homeController = {
home : function (req, res) {
    return res.render('home', { title: 'Acqua'} , ) ;
    },
futuro : function (req, res) {
    return res.render('futuroHome', { title: 'Acqua'} , ) ;
    },
search: function (req, res) {
    let searchData = req.query;
    return res.send(searchData.search);
},

prueba: function (req, res) {
    user.findAll()
    .then(function(resultados){
        return res.send(resultados);

      

    })

    .catch(function(error){
        console.log(error);
    })


},

};


 
module.exports= homeController;