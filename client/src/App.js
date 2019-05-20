import React, { Component } from 'react';
import { connect } from 'react-redux'

import Chat from './components/ChatContainer'
import Login from './components/LoginContainer'

class App extends Component {
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
export default connect(mapStateToProps)(App)
