import decamelize from 'decamelize'
import pluralize from 'pluralize'

export function generateActionName(name){
  return decamelize(name).toUpperCase()
}

function link(name){return 'LINK_' + generateActionName(pluralize(name, 1))}
function unlink(name){return 'UNLINK_' + generateActionName(pluralize(name, 1))}
function createRelationship(name){return 'INDEX_LINK_' + generateActionName(pluralize(name, 1))}
function indexRelationship(name){return 'INDEX_RELATIONSHIP_' + generateActionName(pluralize(name, 1))}
function create(name){return 'CREATE_' + generateActionName(pluralize(name, 1))}
function update(name){return 'UPDATE_' + generateActionName(pluralize(name, 1))}
function remove(name){return 'REMOVE_' + generateActionName(pluralize(name, 1))}
function get(name){return 'GET_' + generateActionName(pluralize(name, 1))}
function index(name){return 'INDEX_' + generateActionName(pluralize(name, 1))}

export default {
  link,
  unlink,
  createRelationship,
  indexRelationship,
  create,
  update,
  remove,
  get,
  index,
}

export {
  link,
  unlink,
  createRelationship,
  indexRelationship,
  create,
  update,
  remove,
  get,
  index,
}