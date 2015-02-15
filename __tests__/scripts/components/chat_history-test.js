'use strict';
var React, TestUtils, path, ChatHistory, MessageStore,
    chatHistoryInstance, chatList, chatItems;

path = '../../../scripts/components/';
jest.dontMock( path + 'chat_history');

describe('ChatHistory', () => {
  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ChatHistory = require( path + 'chat_history');
    MessageStore = require ( path + '../stores/message_store');
  });

  afterEach(() => {
    if(chatHistoryInstance && chatHistoryInstance.isMounted()) {
      React.unmountComponentAtNode(chatHistoryInstance.getDOMNode().parent);
    }
  });

  it('adds an event on the store change listener on creation', () => {
    chatHistoryInstance = TestUtils.renderIntoDocument(<ChatHistory />);
    expect(MessageStore.addChangeListener).toBeCalled();
  });

  describe('#render', () => {
    it('adds an empty chat list if there is no chat state', () => {
      MessageStore.getMessages.mockReturnValue([]);
      chatHistoryInstance = TestUtils.renderIntoDocument(<ChatHistory />);
      chatList = TestUtils.findRenderedDOMComponentWithTag(chatHistoryInstance, 'ul');
      chatItems = TestUtils.scryRenderedDOMComponentsWithTag(chatList, 'li');
      expect(chatItems.length).toEqual(0);
    });


    it('adds chat history if there is chat state', () => {
      MessageStore.getMessages.mockReturnValue(['the first message', 'the second message']);
      chatHistoryInstance = TestUtils.renderIntoDocument(<ChatHistory />);
      chatList = TestUtils.findRenderedDOMComponentWithTag(chatHistoryInstance, 'ul');
      chatItems = TestUtils.scryRenderedDOMComponentsWithTag(chatList, 'li');

      expect(chatItems.length).toEqual(2);
      expect(chatItems[0].getDOMNode().textContent).toEqual('the first message');
      expect(chatItems[1].getDOMNode().textContent).toEqual('the second message');
    });
  });
});
