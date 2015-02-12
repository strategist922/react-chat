'use strict';
var React, ChatPanel, ChatHistory, ChatMessage;

React = require('react');
ChatHistory = require('./chat_history');
ChatMessage = require('./chat_message');

ChatPanel = React.createClass({
  render() {
    return (
      <div className="chat-panel">
        <ChatHistory />
        <ChatMessage />
      </div>
    );
  }
});

module.exports = ChatPanel;
