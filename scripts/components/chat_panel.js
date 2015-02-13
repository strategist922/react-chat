'use strict';
var React, ChatPanel, ChatHistory, ChatMessage, i18n;

React = require('react');
ChatHistory = require('./chat_history');
ChatMessage = require('./chat_message');
i18n = require('../locales/i18n');

ChatPanel = React.createClass({
  render() {
    return (
      <div className="chat-panel">
        <ChatHistory />
        <ChatMessage buttonLabel={i18n.t('app.chat-panel.chat-message.send-button')}/>
      </div>
    );
  }
});

module.exports = ChatPanel;
