'use strict';
var EventEmitter, assign, MessageDispatcher, ActionTypes, MessageStore, _state;

EventEmitter = require('events').EventEmitter;
assign = require('object-assign');
MessageDispatcher = require('../dispatchers/message_dispatcher');
ActionTypes = require('../constants/message_constants');

_state = {
  'messages': []
}

MessageStore = assign(EventEmitter.prototype, {
  CHANGE_EVENT: 'change',
  emitChange() {
    this.emit(this.CHANGE_EVENT);
  },

  addChangeListener(callback) {
    this.on(this.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(this.CHANGE_EVENT, callback);
  },

  getMessages() {
    return _state.messages;
  },

  dispatcherIndex: MessageDispatcher.register((payload) => {
    switch(payload.type) {
      case ActionTypes.SEND_MESSAGE:
        _state.messages.push(payload.message);
        break;
    }
    MessageStore.emitChange();
    return true;
  })
});

module.exports = MessageStore;
