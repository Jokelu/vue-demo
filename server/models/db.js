var mongoose = require('mongoose')
DBDEMO_URL = 'mongodb://localhost:27017/demo';
DBDUMALL_URL = 'mongodb://localhost:27017/dumall';

mongoose.connect(DBDEMO_URL);
/**
 * 连接成功
 */
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + DBDEMO_URL);
});

/**
 * 连接异常
 */
mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected');
});
module.exports = mongoose
