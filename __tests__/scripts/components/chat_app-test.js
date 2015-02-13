'use strict';
var React, ChatApp, TestUtils, path, chatAppInstance;

path = '../../../scripts/components/';
jest.dontMock( path + 'chat_app');

describe('ChatApp', () => {
  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ChatApp = require( path + 'chat_app');
    chatAppInstance = TestUtils.renderIntoDocument(<ChatApp title="Chat App"/>);
  });

  afterEach(() => {
    if(chatAppInstance && chatAppInstance.isMounted()) {
      React.unmountComponentAtNode(chatAppInstance.getDOMNode().parent);
    }
  });

  it('renders a title on the page', () => {
    var title = TestUtils.findRenderedDOMComponentWithTag(chatAppInstance, 'h1');
    expect(title.getDOMNode().textContent).toEqual('Chat App');
  });
});
