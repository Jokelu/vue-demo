var express = require('express');
var router = express.Router();
var User = require('./../models/user');
var Menu = require('./../models/menu');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.post('/user', function (req, res, next) {
  let params = req.body.userage
  if (!params) {
    res.json({
      status: '1003',
      msg: 'userage is null',
      result: ''
    });
  } else {
    User.findOne({userage: params}, function (err, doc) {
      if (err) {
        res.json({
          status: "1",
          msg: err.message
        });
      } else {
        res.json({
          status: '0',
          msg: '',
          result: doc
        });
      }
    })
  }
})
router.post('/menu',((req,res,next) => {
  Menu.findOne({},((err,doc) => {
    if (err) {
      res.json({
        status:'1',
        msg:err.message
      })
    }else {
      res.json({
        status:'0',
        result:doc
      })
    }
  }))
}))
module.exports = router;
