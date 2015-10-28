var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoConnectionString = "mongodb://127.0.0.1/agenda";

// agenda
var Agenda= require('agenda')
var agendaUI = require('agenda-ui');
var agenda = new Agenda({db: {address: mongoConnectionString}});

var index = require('./routes/index');
var users = require('./routes/users');
var sleep = require('./routes/sleep');
var steps = require('./routes/steps');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', index);
app.use('/steps',steps);
app.use('/sleep', sleep);
app.use('/users', users);
//    app.use('/agenda-ui', agendaUI(agenda, {poll: 1000}));

//    agenda.define('collect data', function(job, done){
//        console.log(job.attrs.data.time, 'collect data!');
//        var Slack = require('node-slack');
//        var slack = new Slack("https://hooks.slack.com/services/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",{});
//        slack.send({
//                text: 'Howdy!',
//                channel: '#zhangzf_s-note',
//                username: 'jenkins'
//        });
//    });
//    
//    agenda.on('ready', function() {
//      //agenda.every('3 minutes', 'delete old users');
//      agenda.every('10 seconds', 'collect data');
//    
//      // Alternatively, you could also do:
//      agenda.every('*/1 * * * *', 'collect data');
//    
//      agenda.schedule('in 10 seconds', 'collect data', {time: new Date()});
//      console.log('agenda start')
//      agenda.start();
//      agenda.processEvery('one minute');
//    });

console.log('Wait 10 seconds...');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
