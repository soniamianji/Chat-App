import React, { Component } from "react";

class SendMessageForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="send-message-form ">
        <input
          className="w-100 "
          onChange={this.props.handleChange}
          value={this.props.message}
          placeholder="Type your message and hit ENTER"
          type="text"
        />
      </form>
    );
  }
}

export default SendMessageForm;
