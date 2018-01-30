//modules needed
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  ,index=require('./routes/index')
  , http = require('http')
  , path = require('path');
   console.log("modules included");
//var session = require('express-session');
var app = express();
var mysql = require('mysql');
var bodyParser=require("body-parser");
var session = require('express-session');
var connection = mysql.createConnection({
              host     : 'localhost',
              user     : 'root',
              password : '',
              database : 'user_registration'
            });
 
connection.connect();
 
global.db = connection;
global.logout=0;
global.reload=0;

   console.log("connection made");


app.set('port', process.env.PORT || 8080);
app.set('views', __dirname + '/view');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
              secret: 'mouse dog',
              resave: false,
              saveUninitialized: true,
              cookie: { maxAge: 60000 }
            }))

   console.log("headers defined");

//handling requests

app.get('/', routes.index);//call for main index page
app.get('/signup', user.signup);//call for signup page
app.post('/add',user.add);
app.get('/add',user.add);

app.post('/signup', user.signup);//call for signup post 
app.get('/login', user.signin);//call for login page
app.post('/login', user.signin);//call for login post
app.get('/home/dashboard', user.dashboard);//call for dashboard page after login
app.get('/home/logout', user.logout);//call for logout
//app.get('/home/profile',user.profile);//to render users profile
//Middleware
app.listen(8080)
