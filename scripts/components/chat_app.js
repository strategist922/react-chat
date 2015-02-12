'use strict';
var React, ChatApp, ChatPanel;

React = require('react');
ChatPanel = require('./chat_panel');

ChatApp = React.createClass({
  render() {
    return (
      <div className="chat-app">
        <h1>Chat App</h1>
        <ChatPanel />
      </div>
    );
  }
});

module.exports = ChatApp;
