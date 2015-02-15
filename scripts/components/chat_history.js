'use strict';
var React, ChatHistory, MessageStore, messageState;

React = require('react');
MessageStore = require('../stores/message_store');

messageState = () => {
  return {
    'messages': MessageStore.getMessages()
  };
};

ChatHistory = React.createClass({
  getInitialState: messageState,

  componentWillMount() {
    MessageStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    MessageStore.removeChangeListener(this._onChange);
  },

  _onChange() {
    this.replaceState(messageState());
  },

  _chatMessages() {
    return (this.state.messages ? this.state.messages : []);
  },

  render() {
    var messages = this._chatMessages().map((message, index) => {
      return (
        <li key={index + 1}>{message}</li>
      );
    });
    return (
      <ul className="chat-history">
        {messages}
      </ul>
    );
  }
});

module.exports = ChatHistory;
