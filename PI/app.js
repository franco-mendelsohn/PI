var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var agregarPostRouter = require('./routes/agregarPost');
var detallePostRouter = require('./routes/detallePost');
var detalleUsuarioRouter = require('./routes/detalleUsuario');
var loginRouter = require('./routes/login');
var miPerfilRouter = require('./routes/miPerfil');
var registracionRouter = require('./routes/registracion');
var ResultadoBusquedaRouter = require('./routes/ResultadoBusqueda');
var futuroHomeRouter = require('./routes/futuroHome')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/users', usersRouter);
app.use('/agregarPost', agregarPostRouter);
app.use('/detallePost', detallePostRouter);
app.use('/detalleUsuario', detalleUsuarioRouter);
app.use('/login', loginRouter);
app.use('/MiPerfil', miPerfilRouter);
app.use('/registracion', registracionRouter);
app.use('/ResultadoBusqueda', ResultadoBusquedaRouter);
app.use('/futuroHome', futuroHomeRouter);

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

//commit1