'use strict';
var React, ChatMessage;

React = require('react');

ChatMessage = React.createClass({
  render() {
    return (
      <div className="chat-message">
        <textarea />
        <button>{this.props.buttonLabel}</button>
      </div>
    );
  }
});

module.exports = ChatMessage;
