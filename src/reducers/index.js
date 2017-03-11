import { combineReducers } from 'redux'
import todos from './todo'
import counter from './counter'

const todoApp = combineReducers({
  todos,
  counters:counter

})

export default todoApp