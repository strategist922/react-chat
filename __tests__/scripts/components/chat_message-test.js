'use strict';
var React, ChatMessage, TestUtils, path, chatMessageInstance;

path = '../../../scripts/components/';
jest.dontMock( path + 'chat_message');

describe('ChatMessage', () => {
  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ChatMessage = require( path + 'chat_message');
    chatMessageInstance = TestUtils.renderIntoDocument(<ChatMessage buttonLabel="Send"/>);
  });

  afterEach(() => {
    if(chatMessageInstance && chatMessageInstance.isMounted()) {
      React.unmountComponentAtNode(chatMessageInstance.getDOMNode().parent);
    }
  });

  it('renders a button on the page with the label `Send`', () => {
    var button = TestUtils.findRenderedDOMComponentWithTag(chatMessageInstance, 'button');
    expect(button.getDOMNode().textContent).toEqual('Send');
  });
});
