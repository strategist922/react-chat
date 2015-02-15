'use strict';
var React, ChatMessage, MessageActions, currentMessage;

React = require('react');
MessageActions = require('../actions/message_actions');

currentMessage = (string) => {
  if (! string) string = '';
  return {
    'currentMessage': string
  };
};

ChatMessage = React.createClass({
  getInitialState: currentMessage,

  onSend(event) {
    MessageActions.sendMessage(this.state.currentMessage);
    this.replaceState(currentMessage());
  },

  onType(event) {
    this.replaceState(currentMessage(event.target.value));
  },

  render() {
    return (
      <div className="chat-message">
        <textarea onChange={this.onType} value={this.state.currentMessage}/>
        <button onClick={this.onSend}>{this.props.buttonLabel}</button>
      </div>
    );
  }
});

module.exports = ChatMessage;
