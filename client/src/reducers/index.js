import { combineReducers } from 'redux'
import authReducer from './authReducer'
import roomListReducer from './roomListReducer'
import roomInfoReducer from './roomInfoReducer'

export default combineReducers({
  auth: authReducer,
  roomList: roomListReducer,
  roomInfo: roomInfoReducer
})
