import decamelize from 'decamelize'
import pluralize from 'pluralize'

export function generateActionName(name){
  return decamelize(name).toUpperCase()
}

export function reorder(name){return 'REORDER_' + generateActionName(pluralize(name, 1))}
export function link(name){return 'LINK_' + generateActionName(pluralize(name, 1))}
export function unlink(name){return 'UNLINK_' + generateActionName(pluralize(name, 1))}
export function createRelationship(name){return 'INDEX_LINK_' + generateActionName(pluralize(name, 1))}
export function indexRelationship(name){return 'INDEX_RELATIONSHIP_' + generateActionName(pluralize(name, 1))}
export function create(name){return 'CREATE_' + generateActionName(pluralize(name, 1))}
export function update(name){return 'UPDATE_' + generateActionName(pluralize(name, 1))}
export function remove(name){return 'REMOVE_' + generateActionName(pluralize(name, 1))}
export function get(name){return 'GET_' + generateActionName(pluralize(name, 1))}
export function index(name){return 'INDEX_' + generateActionName(pluralize(name, 1))}

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
  reorder
}