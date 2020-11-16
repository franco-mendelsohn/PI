const bcrypt = require('bcryptjs');
const db = require('../database/models');
const users = db.User;
let ingresoController = {
    login : function (req, res) {
        if(req.session.user != undefined){
            return res.redirect('/feed')
        } else {
        return res.render('login');
        }
    },
    check : function (req, res){   //encontrar el email. Chquear que la contrsena coincida.
        users.findOne({               //nos trae un elemento o nada.
            where: [{ email: req.body.email}]
         })
        .then(function(user){     // si coninciden las contarsenas queiro guardar la informacion de la sesion, para poder recuperar en otro controlador
            if (user == null){
                let mensajeEmail = "El email ingresado es incorrecto, intente de nuevo."
                return res.render('login', {mensajeEmail})                                // si el email es incorrecto tira eso
            } else if (bcrypt.compareSync(req.body.contrasena, user.contrasena) == false){
                let mensajeContrasena = "La contraseña ingresada es incorrecta, intente de nuevo."
                return res.render('login', {mensajeContrasena})                                  // si la contrasena es incorrecto tira eso
            } else if (bcrypt.compareSync(req.body.contrasena, user.contrasena)){        //si concide lo que pone con lo que dice en la base, te doy un TRUE sino un FALSE. Primero lo que dice el cliente y despues compara con el hash de la base.
                req.session.user = user ;                                 //seesion se maneja con un modulo
                if(req.body.rememberme != undefined){                   //controlamos el checkbox recordame
                    res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 24 * 90} )           //creamos la cookie, como lo vamos a llamar, que va a tener y cuanto tiempo va a durar en milisegundos (3 meses)
                }
                return res.redirect('/feed');
            }
        })
        .catch(e => console.log(e));
    },
    index: function (req, res) {
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
         return res.render('registracion');
        }
        },
    store: function (req, res) {
        users.findOne({
            where: [{ email: req.body.email}]
        })
       .then(function(user){
         if (user != undefined){
        let mensaje = "El email utilizado ya esta en uso, intente con otro."
        return res.render('registracion', {mensaje})
        } else {
            let usuarios = {
        nombre: req.body.nombre,
        contrasena: bcrypt.hashSync(req.body.contrasena, 10),
        apellido: req.body.apellido,
        email: req.body.email,
        username: req.body.username,
        cumpleanos: req.body.cumpleanos,
        lema: req.body.lema,
        respuesta: req.body.respuesta,
        perfil: req.body.perfil,
        }
        users.create(usuarios);
    }
        return res.redirect('/ingreso/login');
    })
 },
        logout: function(req, res){
            req.session.destroy();
            res.clearCookie('userId');
            return res.redirect('/');
        },
        renderpw: function(req,res){
            return res.render("olvidePw")
        },
       
        
           
    

    };
    module.exports= ingresoController;