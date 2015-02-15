'use strict';
var MessageDispatcher, ActionTypes, Actions;

MessageDispatcher = require('../dispatchers/message_dispatcher');
ActionTypes = require('../constants/message_constants');
Actions = exports;

Actions.sendMessage = (message) => {
  MessageDispatcher.dispatch({
    type: ActionTypes.SEND_MESSAGE,
    message: message
  });
};
