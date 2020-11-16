var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');
var db = require('./database/models');
var homeRouter = require('./routes/home');
var ingresoRouter = require('./routes/ingreso');
var infoRouter = require('./routes/info');
var postRouter = require('./routes/post');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  {secret:'acqua', //esta frase es para que sesion pueda contruir una estructura de seguridad
  resave: false,
  saveUninitialized: true}
));
app.use(express.static(path.join(__dirname, 'public')));
//sirve para hacer cosas en todas las vistas
app.use(function(req, res, next){
  if(req.session.user != undefined){     // locals nos deja disponible los datos en todas las vistas
    res.locals.user = req.session.user    //si hay algo en la session ponelo dentro de locals.user
  return next();
  }
  return next();
})
app.use(function(req, res, next){
  if(req.cookies.userId != undefined && req.session.user == undefined){ //si tenemos cookies pero no tenemos session
    db.User.findByPk(req.cookies.userId)             //Buscamos al usuario en la db por id que esta dentro de la cookie y lo cargamos en la session
      .then(function(user){
        req.session.user = user;
        res.locals.user = user;
      return next();
    })
    .catch(e => console.log(e))
   } else {
      return next();
    }
})

app.use('/', homeRouter);
app.use('/ingreso', ingresoRouter);
app.use('/info', infoRouter);
app.use('/post', postRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;