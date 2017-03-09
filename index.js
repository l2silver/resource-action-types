var decamelize = require('decamelize')
var pluralize = require('pluralize')

function generateActionName(name){
  return decamelize(name).toUpperCase()
}
var nameGenerators = {
  link: function(name){return 'LINK_' + generateActionName(pluralize(name, 1))},
  unlink: function(name){return 'UNLINK_' + generateActionName(pluralize(name, 1))},
  createRelationship: function(name){return 'INDEX_LINK_' + generateActionName(pluralize(name, 1))},
  indexRelationship: function(name){return 'INDEX_RELATIONSHIP_' + generateActionName(pluralize(name, 1))},
  create: function(name){return 'CREATE_' + generateActionName(pluralize(name, 1))},
  update: function(name){return 'UPDATE_' + generateActionName(pluralize(name, 1))},
  remove: function(name){return 'REMOVE_' + generateActionName(pluralize(name, 1))},
  get: function(name){return 'GET_' + generateActionName(pluralize(name, 1))},
  index: function(name){return 'INDEX_' + generateActionName(pluralize(name, 1))},
}
module.exports = nameGenerators
module.exports.actionifyName = generateActionName
module.exports.default = nameGenerators
