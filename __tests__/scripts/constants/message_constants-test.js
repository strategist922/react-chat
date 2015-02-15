'use strict';
var MessageConstants, path;

path = '../../../scripts/constants/';
jest.dontMock( path + 'message_constants');

describe('MessageConstants', () => {
  beforeEach(() => {
    MessageConstants = require( path + 'message_constants');
  });

  it('creates a SEND_MESSAGE constant', () => {
    expect(MessageConstants.SEND_MESSAGE).toEqual('SEND_MESSAGE');
  });
});
