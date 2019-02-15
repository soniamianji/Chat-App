import React, { Component } from "react";

class MessageList extends React.Component {
  render() {
    return (
      <ul className="listParent message-list list-group d-flex justify-content-center mx-auto text-secondary scrollspy-example mt-3">
        {this.props.messages.map((message, index) => {
          return (
            <li className="list-group-item" key={message.id}>
              <div className="badge badge-warning mb-2">{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default MessageList;
