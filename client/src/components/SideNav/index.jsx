import React from 'react';

import UserInfo from '../UserInfo'
import RoomList from '../RoomList'
import './style.css'

const SideNav = ({ username, loginTime, roomList }) => {
  return(
    <div className="side-nav-container">
      <UserInfo
        username={username}
        loginTime={loginTime} />
      <RoomList
        roomList={roomList} />
    </div>
  )
}

export default SideNav
