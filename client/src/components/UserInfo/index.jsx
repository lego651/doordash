import React, { Component } from 'react'

import { convertTime } from '../../utils/util.js'
import './style.css'

class UserInfo extends Component {
  constructor(){
    super()
    this.state = {
      currentTime: new Date().getTime()
    }
  }

  // *
  // Version 1 to check online time by using setInterval,
  // Another possible solution is: React-Moment, props: interval
  // *
  componentDidMount() {
    this.checkTimeInterval = setInterval(
      () => this.checkTime(),
      1000 * 60
    )
  }
  componentWillUnmount() {
    clearInterval(this.checkTimeInterval)
  }
  checkTime() {
    this.setState({
      currentTime: new Date()
    })
  }

  render(){
    let { username, loginTime } = this.props
    let { currentTime } = this.state
    let onlineTime = currentTime - loginTime
    return(
      <div className="userinfo-container">
        <h2> { username } </h2>
        <p> Online for { convertTime(onlineTime) } </p>
      </div>
    )
  }
}

export default UserInfo
