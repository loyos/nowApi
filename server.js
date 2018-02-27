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

// require('./config/config');

// passport 

var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy;

  app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log("entrando a local strategy");

    return done(null, {name: 'loy'});

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

// app.post('/login', function (req, res, next) {
//   console.log("entrando a /login middleware post");
// });

app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/pupu' }),
  function(req, res) {
    console.log("entrando en authenticate post");
    res.redirect('/madridNow');
  });

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                   failureRedirect: '/nowMadrid',
//                                   failureFlash: true })
// );

//  end passport 

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
