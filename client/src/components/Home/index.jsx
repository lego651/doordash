import React, { Component } from 'react';
import { connect } from 'react-redux'

import Chat from '../ChatContainer'
import Login from '../LoginContainer'

class Home extends Component {
  render() {
    const { username } = this.props
    return (
      <div className="app-container">
        {
          username
          ? <Chat />
          : <Login />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username
})
export default connect(mapStateToProps)(Home)
