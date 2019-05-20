import React from 'react';

import RoomHeader from '../RoomHeader'
import MessageList from '../MessageList'
import ChatInput from '../ChatInput'
import './style.css'

const ChatRoom = ({ selectedRoom, username }) => {
  return(
    selectedRoom !== undefined
    ? <div className="chat-content">
        <RoomHeader name={selectedRoom.name}
                    users={selectedRoom.users}
                    username={username} />
        <MessageList messages={selectedRoom.messages}
                     username={username} />
        <ChatInput roomID={selectedRoom.id} />
      </div>
    : <div> Loading... </div>
  )
}

export default ChatRoom
