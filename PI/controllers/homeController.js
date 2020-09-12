let homeController = {
home : function (req, res) {
    return res.render('home', { title: 'home' });
    },

};
 
module.exports= homeController;