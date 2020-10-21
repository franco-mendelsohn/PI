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

    //ahora para que busque esta palabra dentro de nuestra base de datos debemos implementar lo del video 7
}
};


 
module.exports= homeController;