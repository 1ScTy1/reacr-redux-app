import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import project from './project'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    project
  })

export default createRootReducer
