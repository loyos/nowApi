'use strict';
module.exports = function (app) {
  var madrid = require('../controllers/madridController');
  var multer = require('multer');


  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const upload = multer({ storage: storage });

  // todoList Routes
  app.route('/promos')
    .get(madrid.list_all_tasks)
    .post(upload.single('promoImage'), madrid.create_a_task);


  app.route('/promos/:promoId')
    .get(madrid.read_a_task)
    .put(madrid.update_a_task)
    .delete(madrid.delete_a_task);

  app.route('/promosbycat/:cat/:day')
    .get(madrid.list_promo_by_category);
};