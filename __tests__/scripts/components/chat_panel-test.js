'use strict';
var React, ChatPanel, TestUtils, path, chatPanelInstance;

path = '../../../scripts/components/';
jest.dontMock( path + 'chat_panel');
jest.dontMock( path + 'chat_history');
jest.dontMock( path + 'chat_message');

describe('ChatPanel', () => {
  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ChatPanel = require( path + 'chat_panel');
    chatPanelInstance = TestUtils.renderIntoDocument(<ChatPanel />);
  });

  afterEach(() => {
    if(chatPanelInstance && chatPanelInstance.isMounted()) {
      React.unmountComponentAtNode(chatPanelInstance.getDOMNode().parent);
    }
  });

  it('renders a pane to display the chat history', () => {
    var box = TestUtils.findRenderedDOMComponentWithClass(chatPanelInstance, 'chat-history');
    expect(box).toBeDefined();
  });

  it('renders a chat message input', () => {
    var box = TestUtils.findRenderedDOMComponentWithClass(chatPanelInstance, 'chat-message');
    var messageInput = TestUtils.findRenderedDOMComponentWithTag(box, 'textarea');
    var messageSubmit = TestUtils.findRenderedDOMComponentWithTag(box, 'button');

    expect(messageInput).toBeDefined();
    expect(messageSubmit).toBeDefined();
  });
});
