'use strict';
module.exports = function (app) {
  var madrid = require('../controllers/madridController');
  var multer = require('multer');
  var User = require('../models/user');
  var jwt = require('jsonwebtoken');


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload = multer({ storage: storage });



  // UNPROTECTED ROUTES 


  // app.get('/setup', function (req, res) {

  //   var nick = new User({
  //     name: 'loy',
  //     password: 'gft123',
  //   });
  //   nick.save(function (err) {
  //     if (err) throw err;

  //     console.log('User saved successfully');
  //     res.json({ success: true });
  //   });
  // });

  app.post('/login', function (req, res) {
    console.log("req: ", req.body);
    // find the user
    User.findOne({
      name: req.body.username
    }, function (err, user) {

      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
      } else if (user) {
        // check if password matches
        if (user.password != req.body.password) {
          res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {
          // if user is found and password is right
          // create a token with only our given payload
          // we don't want to pass in the entire user since that has the password
          const payload = {
            user: user.name
          };
          var token = jwt.sign(payload, app.get('superSecret'), {
            expiresIn: 1440 // expires in 24 hours
          });

          // return the information including token as JSON
          res.json({
            success: true,
            message: 'Enjoy your token!',
            token: token
          });
        }
      }
    });
  });

  // todoList Routes
  app.route('/promos')
    .get(madrid.list_all_tasks);

  app.route('/promosbycat/:cat/:day')
    .get(madrid.list_promo_by_category);

  app.route('/promos/:promoId')
    .get(madrid.read_a_task);



  // PROTECTED ROUTES FROM HERE  

  app.use(function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, app.get('superSecret'), function (err, decoded) {
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;
          next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({
        success: false,
        message: 'No token provided.'
      });
    }
  });

  // all other routes to.. 
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));  
});

  // ROUTES PROTECTED BY TOKEN

  app.route('/promos')
  .post(upload.single('promoImage'), madrid.create_a_task);

  app.route('/promos/:promoId')
    .put(madrid.update_a_task)
    .delete(madrid.delete_a_task);

  // user routes

  app.get('/users', function (req, res) {
    User.find({}, function (err, users) {
      res.json(users);
    });
  });
};