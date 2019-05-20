import { CONSTANTS } from '../actions'

const initialState = []

const roomListReducer = (state=initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_ROOM_LIST:
      return [...state, ...action.roomList]
    default:
      return state
  }
}

export default roomListReducer
