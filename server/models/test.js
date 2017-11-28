var User = require("./user.js");

/**
 * 插入
 */
function insert() {

  var user = new User({
    username : 'Tracy McGrady',                 //用户账号
    userpwd: 'abcd',                            //密码
    userage: 37,                                //年龄
    logindate : new Date()                      //最近登录时间
  });

  user.save(function (err, res) {

    if (err) {
      console.log("Error:" + err);
    }
    else {
      console.log("Res:" + res);
    }

  });
}

insert();
