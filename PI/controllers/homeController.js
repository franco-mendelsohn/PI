

let homeController = {
home : function (req, res) {
    return res.render('home', { title: 'Nombre del sitio'} , ) ;
    },

};
 
module.exports= homeController;