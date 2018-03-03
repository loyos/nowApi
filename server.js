var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/madridModel'), //created model loading here
  User = require('./api/models/user'),
  jwt = require('jsonwebtoken'),
  config = require('./config/config'),
  bodyParser = require('body-parser'),
  path = require('path');

  app.use(cors());
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database); 
app.set('superSecret', config.secret);

// make the upload folder public 
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));


var routes = require('./api/routes/madridRoutes'); //importing routes
routes(app, __dirname); //register the route

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
