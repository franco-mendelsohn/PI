const bcrypt = require('bcryptjs');
const db = require('../database/models');
const users = db.User;


let ingresoController = {
    login : function (req, res) {
        return res.render('login');
        },
    check : function (req, res){   //encontrar el email. Chquear que la contrsena coincida.
        users.findOne({               //nos trae un elemento o nada.
            where: [{ email: req.body.email}]     //NO PUSIMOS EMAIL EN LA TABLA!!!
         })      
        .then(function(user){     // si coninciden las contarsenas queiro guardar la informacion de la sesion, para poder recuperar en otro controlador
            if (user == null){
                return res.send('email incorrecto')                                 // si el email es incorrecto tira eso
            } else if (bcrypt.compareSync(req.body.contraseña, user.contraseña) == false){ 
                return res.send('contraseñincorrecta')                                  // si la contrasena es incorrecto tira eso
            } else if (bcrypt.compareSync(req.body.contraseña, user.contraseña)){        //si concide lo que pone con lo que dice en la base, te doy un TRUE sino un FALSE. Primero lo que dice el cliente y despues compara con el hash de la base.
                req.session.cliente = cliente;                                          //seesion se maneja con un modulo
                return res.redirect('/');
            } 
        })
        .catch(e => console.log(e));
    },






    index: function (req, res) {
        return res.render('registracion');
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
       //.then
       return res.redirect("/");


        },
    
    
    };
     
    module.exports= ingresoController;