var express = require('express'),
  cors = require('cors'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/madridModel'), //created model loading here
  bodyParser = require('body-parser'),
  path = require('path');

  var session = require("express-session");
  app.use(session({ secret: "cats" }));
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

// require('./config/config');

// passport 

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("entrando a local strategy");
    console.log(username);
    if(username == 'loy'){
      return done(null, {name: 'loy'});
    }else{
      return done(null, false, { message: 'Incorrect username.' });
    }
    

    // User.findOne({ username: username }, function(err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' });
    //   }
    //   return done(null, user);
    // });
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

app.use(function (req, res, next) {
  console.log('req.user', req.user );
  next();
});



app.post('/login', 
  passport.authenticate('local'),
  function(req, res) {
    console.log("entrando en authenticate post", req);
    res.redirect('/madridNow');
  });

//  end passport 

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));  
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
