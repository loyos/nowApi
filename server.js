var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/madridModel'), //created model loading here
  bodyParser = require('body-parser'),
  path = require('path');

  app.use(cors());
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Promosdb'); 

// make the upload folder public 
app.use('/uploads', express.static('uploads'))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'dist')));

var routes = require('./api/routes/madridRoutes'); //importing route
routes(app); //register the route

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
