'use strict';
var React, ChatApp, i18n;

React = require('react');
ChatApp = require('./components/chat_app');
i18n = require('./locales/i18n');

React.render(<ChatApp title={i18n.t('app.title')}/>, document.body);
