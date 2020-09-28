

let homeController = {
home : function (req, res) {
    return res.render('home', { title: 'Acqua'} , ) ;
    },
futuro : function (req, res) {
    return res.render('futuroHome', { title: 'Acqu'} , ) ;
    },

};
 
module.exports= homeController;