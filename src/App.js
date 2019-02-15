import React, { Component } from "react";
import Title from "./Title";
import MessageList from "./MessageList";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";
import SendMessageForm from "./SendMessageForm";

const instanceLocator = "v1:us1:5a8e2c14-b05b-4798-a8cb-6b4a8da5d541";
const testToken =
  "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/5a8e2c14-b05b-4798-a8cb-6b4a8da5d541/token";
const username = "sonia";
const roomId = "19382582";

class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      msg: ""
    };
  }
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: instanceLocator,
      userId: username,
      tokenProvider: new TokenProvider({
        url: testToken
      })
    });

    chatManager.connect().then(currentUser => {
      this.currentUser = currentUser;
      this.currentUser.subscribeToRoom({
        roomId: roomId,
        hooks: {
          onMessage: message => {
            this.setState({
              messages: [...this.state.messages, message]
            });
          }
        }
      });
    });
  }
  sendMessage = text => {
    this.currentUser.sendMessage({
      text,
      roomId: roomId
    });
  };
  handleChange = e => {
    this.setState({
      msg: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.sendMessage(this.state.msg);
    this.setState({
      messages: [...this.state.messages, this.state.msg],
      msg: ""
    });
  };

  render() {
    return (
      <div className="App container bg-info justify-content-center min-vh-100 w-100">
        <Title />
        <MessageList
          roomId={this.state.roomId}
          messages={this.state.messages}
        />
        <SendMessageForm
          message={this.state.msg}
          sendMessage={this.sendMessage}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
