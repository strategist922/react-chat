'use strict';
var React, ChatMessage;

React = require('react');

ChatMessage = React.createClass({
  render() {
    return (
      <div className="chat-message">
        <textarea />
        <button>Send</button>
      </div>
    );
  }
});

module.exports = ChatMessage;
