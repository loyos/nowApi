'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Promos');

exports.list_all_tasks = function (req, res) {
  Task.find({}, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.list_promo_by_category = function (req, res) {
  console.log("entrando a list_promo_by_category: ", req.params.cat);
  console.log("entrando a list_promo_by_category: ", req.params.day);
  var reg = new RegExp(req.params.day);
  Task.find().where('category', req.params.cat).where('day', reg).exec(function (err, doc) {
    if (err)
      res.send(err);
    res.json(doc);
  });
};


exports.create_a_task = function (req, res) {
  console.log(req.file);
  var new_task = new Task({
    name: req.body.name,
    info: req.body.info,
    day: req.body.day,
    img: req.file.path,
    category: req.body.category
  });
  new_task.save(function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.read_a_task = function (req, res) {
  Task.findById(req.params.promoId, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_a_task = function (req, res) {
  console.log("entrando a update promo");
  console.log(req.params.promoId);
  console.log(req.body);
  Task.findOneAndUpdate({ _id: req.params.promoId }, req.body, { new: true }, function (err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_a_task = function (req, res) {
  console.log("entrando a delete task");
  Task.remove({
    _id: req.params.promoId
  }, function (err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Promo successfully deleted' });
  });
};