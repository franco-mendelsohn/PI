let ingresoController = {
    login : function (req, res) {
        return res.render('login', { title: 'Login' });
        },
    registro: function (req, res) {
        return res.render('registracion', { title: 'Login' });
        },
    };
     
    module.exports= ingresoController;