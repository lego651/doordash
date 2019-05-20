import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addMessage } from '../../actions'
import './style.css'

class ChatInput extends Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
  }
  handleChange(e) {
    this.setState({
      message: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    const { roomID, username, addMessage } = this.props
    const { message } = this.state
    if(this.state.message.trim().length > 0) {
      addMessage(roomID, username, message)
      this.setState({
        message: ''
      })
    }
  }
  render() {
    return(
      <div className="chat-input-container">
        <div className="chat-form">
          <form id="chatInput"
                onSubmit={(e)=>{this.handleSubmit(e)}}>
            <input type="text"
                   className="new-message"
                   name="message"
                   placeholder="Type a message..."
                   value={this.state.message}
                   onChange={(e)=>{this.handleChange(e)}} />
            <input type="submit"
                   className="submit-button"
                   value="Send" />
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  username: state.auth.username,
})
const mapDispatchToProps = (dispatch) => ({
  addMessage: (roomID, name, message) => dispatch(addMessage(roomID, name, message)),
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInput)
