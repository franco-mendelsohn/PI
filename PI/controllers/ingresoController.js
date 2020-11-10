const bcrypt = require('bcryptjs');
const db = require('../database/models');
const users = db.User;


let ingresoController = {
    login : function (req, res) {
        if(req.session.user != undefined){
            return res.redirect('/')
        } else {
        return res.render('login');
        }
    },
    check : function (req, res){   //encontrar el email. Chquear que la contrsena coincida.
        users.findOne({               //nos trae un elemento o nada.
            where: [{ email: req.body.email}]     //NO PUSIMOS EMAIL EN LA TABLA!!!
         })      
        .then(function(user){     // si coninciden las contarsenas queiro guardar la informacion de la sesion, para poder recuperar en otro controlador
            if (user == null){
                return res.send('email incorrecto')                                 // si el email es incorrecto tira eso
            } else if (bcrypt.compareSync(req.body.contrasena, user.contrasena) == false){ 
                return res.send('contraseña incorrecta')                                  // si la contrasena es incorrecto tira eso
            } else if (bcrypt.compareSync(req.body.contrasena, user.contrasena)){        //si concide lo que pone con lo que dice en la base, te doy un TRUE sino un FALSE. Primero lo que dice el cliente y despues compara con el hash de la base.
                req.session.user = user ;                                 //seesion se maneja con un modulo
                if(req.body.rememberme != undefined){                   //controlamos el checkbox recordame
                    res.cookie('userId', user.id, {maxAge: 1000 * 60 * 60 * 24 * 90} )           //creamos la cookie, como lo vamos a llamar, que va a tener y cuanto tiempo va a durar en milisegundos (3 meses)
                }
                return res.redirect('/');
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
         
       let usuarios = {
        
        nombre: req.body.nombre,
        contrasena: bcrypt.hashSync(req.body.contrasena, 10), //para encriptar los datos de la contrasena el 10 es para agregar 10 caracteres al alazar
        apellido: req.body.apellido,
        email: req.body.email,
        username: req.body.username,
        cumpleanos: req.body.cumpleanos,
        lema: req.body.lema,
        
       }
       
       users.create(usuarios)
       
       return res.redirect("/ingreso/login");


        },

        logout: function(req, res){
            req.session.destroy();
            res.clearCokkier(userId);
            
            return res.redirect('/');
        },
    
    
    };
     
    module.exports= ingresoController;