import { combineReducers } from 'redux'
import userReducer from './user/userReducer'

// Register all reducer
const rootReducer = combineReducers({
  // user reducer state
  user: userReducer
})

export default rootReducer
