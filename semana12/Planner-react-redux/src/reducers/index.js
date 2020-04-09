import { combineReducers } from 'redux'
import getTaskReducer from './getTasksReducer'

export const rootReducer = combineReducers({
  tasks: getTaskReducer,
})
