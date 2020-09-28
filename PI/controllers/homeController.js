

let homeController = {
home : function (req, res) {
    return res.render('home', { title: 'Acqua'} , ) ;
    },

};
 
module.exports= homeController;