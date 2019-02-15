import React, { Component } from "react";

class SendMessageForm extends React.Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}
        className="mx-auto d-flex justify-content-center"
      >
        <input
          className="form-control w-75"
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
