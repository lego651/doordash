import axios from 'axios'

import { CONSTANTS } from '../actions'
import { ROOT_URL } from '../utils/config.js'

export const getRoomList = () => {
  return dispatch => {
    const room_list_url = ROOT_URL + 'rooms/'
    axios.get(room_list_url)
    .then(response => response.data)
    .then((result) => {
      return dispatch({
        type: CONSTANTS.FETCH_ROOM_LIST,
        roomList: result
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}

export const joinRoom = (roomID, username) => {
  return {
    type: CONSTANTS.JOIN_ROOM,
    roomID: roomID,
    username: username
  }
}

export const getRoomInfo = (roomID) => {
  return dispatch => {
    const room_info_url = ROOT_URL + 'rooms/' + roomID
    const room_message_url = ROOT_URL + 'rooms/' + roomID + '/messages'
    axios.all([
      axios.get(room_info_url),
      axios.get(room_message_url)
    ])
    .then(axios.spread((roomInfoResponse, roomMessagesResponse) => {
      return dispatch({
        type: CONSTANTS.FETCH_ROOM_INFO,
        name: roomInfoResponse.data.name,
        id: roomInfoResponse.data.id,
        users: roomInfoResponse.data.users.reverse(),
        messages: roomMessagesResponse.data,
      })
    }))
    .catch(error => {
      console.log(error)
    })
  }
}

export const getRoomInfoAndJoinInRoom = (roomID, username) => {
  return dispatch => {
    const room_info_url = ROOT_URL + 'rooms/' + roomID
    const room_message_url = ROOT_URL + 'rooms/' + roomID + '/messages'
    axios.all([
      axios.get(room_info_url),
      axios.get(room_message_url)
    ])
    .then(axios.spread((roomInfoResponse, roomMessagesResponse) => {
      return dispatch({
        type: CONSTANTS.FETCH_ROOM_INFO,
        name: roomInfoResponse.data.name,
        id: roomInfoResponse.data.id,
        users: roomInfoResponse.data.users.reverse(),
        messages: roomMessagesResponse.data,
      })
    }))
    .then(res =>
      dispatch({
        type: CONSTANTS.JOIN_ROOM,
        roomID: roomID,
        username: username
      })
    )
    .catch(error => {
      console.log(error)
    })
  }
}

export const addMessage = (roomID, name, message) => {
  return dispatch => {
    const room_message_url = ROOT_URL + 'rooms/' + roomID + '/messages'
    axios.post(room_message_url, {
      name: name,
      message: message
    })
    .then(response => response.data)
    .then((result) => {
      return dispatch({
        type: CONSTANTS.ADD_MESSAGE,
        roomID: roomID,
        name: result.name,
        message: result.message,
        id: result.id,
        reaction: result.reaction
      })
    })
    .catch(error => {
      console.log(error)
    })
  }
}
