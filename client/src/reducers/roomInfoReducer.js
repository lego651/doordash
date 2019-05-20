import { CONSTANTS } from '../actions'

const initialState = []

const roomInfoReducer = (state=initialState, action) => {
  switch (action.type) {
    case CONSTANTS.FETCH_ROOM_INFO: {
      const newState = state.filter(item => {
        return item.id !== action.id
      })
      return [
               { id: action.id,
                 name: action.name,
                 users: action.users,
                 messages: action.messages
               },
               ...newState
             ]
    }
    case CONSTANTS.JOIN_ROOM: {
      const newState = state.map(item => {
        if(item.id !== action.roomID) {
          return item
        }
        return {
          ...item,
          users: [
            action.username,
            ...item.users,
          ]
        }
      })
      return newState
    }
    case CONSTANTS.ADD_MESSAGE: {
      const newState = state.map(item => {
        if(item.id !== action.roomID) {
          return item
        }
        return {
          ...item,
          messages: [
            ...item.messages,
            {
              name: action.name,
              message: action.message,
              id: action.id,
              reaction: action.reaction
            }
          ]
        }
      })
      return newState
    }
    default:
      return state
  }
}

export default roomInfoReducer
