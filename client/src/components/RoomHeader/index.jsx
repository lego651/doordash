import React from 'react';

import './style.css'

const RoomHeader = ({ name, users, username }) => {
  return(
    <div className="room-header-container">
      <div className="room-header-content">
        <div className="room-name">
          { name }
        </div>
        <div className="room-users">
          <ul>
            {users.map((item, i) => {
              return <li key={i}>
                        <span className={(item === username ? 'curUser' : null)}>
                          { item }
                        </span><span>
                          {i === users.length - 1 ? '' : ','}
                        </span>
                      </li>
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default RoomHeader
