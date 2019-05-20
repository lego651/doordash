import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './style.css'

class RoomList extends Component {
  render(){
    let { roomList } = this.props
    return(
      <div className="room-list-container">
        { roomList.map(room =>
            <NavLink key={room.id}
                     activeClassName="active"
                     to={"/rooms/" + room.id}
                     className="side-room">
              {room.name}
            </NavLink>)
        }
      </div>
    )
  }
}

export default RoomList
