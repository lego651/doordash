import React from 'react';

import './style.css'

const Message = ({ item, username }) => {
  const isOwner = (item.name === username)
  return(
    <div className={"message-container" + (isOwner ? " isOwner" : "")}>
      <div className="message-content">
        <p> {item.message} </p>
      </div>
      {
        !isOwner
        ? <div className="message-sender">
            {item.name}
          </div>
        : null
      }
    </div>
  )
}

export default Message
