var user = require('./user.js')
function update() {
  var wherestr = {'username':'luyunfei'}
  var updatestr = {'userpwd':'123456'}
  user.update(wherestr,updatestr,function (err,res) {
    if (err) {
      console.log('error'+err)
    }else {
      console.log('res'+Object.stringify(res))
    }
  })
}
update()
