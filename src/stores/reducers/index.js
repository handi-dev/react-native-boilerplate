import { combineReducers } from 'redux'
import userReducer from './user.reducer'
//insert another reducers here to be combined

const reducers = combineReducers({
  userReducer
})

export default reducers
