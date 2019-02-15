import React, { Component } from "react";

class MessageList extends React.Component {
  render() {
    return (
      <ul className="message-list list-group d-flex justify-content-center mx-auto text-secondary">
        {this.props.messages.map((message, index) => {
          return (
            <li className="list-group-item" key={message.id}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
