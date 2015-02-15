'use strict';
var MessageActions, MessageDispatcher, path;

path = '../../../scripts/actions/';
jest.dontMock( path + 'message_actions');

describe('MessageActions', () => {
  beforeEach(() => {
    MessageActions = require( path + 'message_actions');
    MessageDispatcher = require( path + '../dispatchers/message_dispatcher');
  });

  describe('#sendMessage', () => {
    it('dispatches a message payload', () => {
      var expectedPayload = {
        'type': 'SEND_MESSAGE',
        'message': 'Death Star Plans'
      };
      MessageActions.sendMessage('Death Star Plans');
      expect(MessageDispatcher.dispatch).toBeCalledWith(expectedPayload);
    });
  });
});
