'use strict';
var React, ChatPanel;

React = require('react');

ChatPanel = React.createClass({
  render() {
    return (
      <div className="chat-panel">
        <div className="chat-history">
        </div>
        <div className="chat-message">
          <textarea />
          <button>Send</button>
        </div>
      </div>
    );
  }
});

module.exports = ChatPanel;
