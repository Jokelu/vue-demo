var mongoose = require('./db.js')
Schema = mongoose.Schema
var MenuSchema = new Schema({
  id: {type:Number},
  name: {type:String},
  displayName: {type:String},
  metaData: {type:Object},
  icon: {type:String},
  url: {type:String},
  sort: {type:Number},
  isActive: {type:Boolean},
  parentId: {type:Number},
  requiresAuthentication: {type:Boolean},
  requiredPermissions: {type:String},
  grantedPermissionNames: {type:String}
})
module.exports = mongoose.model('Menu', MenuSchema);
