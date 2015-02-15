'use strict';
var React, TestUtils, path, ChatMessage, MessageActions,
    chatMessageInstance, textarea, button;

path = '../../../scripts/components/';
jest.dontMock( path + 'chat_message');

describe('ChatMessage', () => {
  beforeEach(() => {
    React = require('react/addons');
    TestUtils = React.addons.TestUtils;
    ChatMessage = require( path + 'chat_message');
    MessageActions = require ( path + '../actions/message_actions');
    chatMessageInstance = TestUtils.renderIntoDocument(<ChatMessage buttonLabel="Send"/>);
    textarea = TestUtils.findRenderedDOMComponentWithTag(chatMessageInstance, 'textarea');
    button = TestUtils.findRenderedDOMComponentWithTag(chatMessageInstance, 'button');
  });

  afterEach(() => {
    if(chatMessageInstance && chatMessageInstance.isMounted()) {
      React.unmountComponentAtNode(chatMessageInstance.getDOMNode().parent);
      textarea = null;
      button = null;
    }
  });

  describe('#render', () => {
    it('adds an empty textarea', () => {
      expect(textarea.getDOMNode().textContent).toEqual('');
    });

    it('renders a button on the page with the label `Send`', () => {
      expect(button.getDOMNode().textContent).toEqual('Send');
    });

    it('updates the textarea text with the updated state text on typing', () => {
      TestUtils.Simulate.change(textarea, { target: { value: 'Rebel Alliance' } });
      expect(textarea.getDOMNode().textContent).toEqual('Rebel Alliance');
    });
  });

  describe('#onClick', () => {
    beforeEach(() => {
      TestUtils.Simulate.change(textarea, { target: { value: 'Rebel Alliance' } });
      TestUtils.Simulate.click(button.getDOMNode());
    });

    it('sends an event with the typed message on clicking send', () => {
      expect(MessageActions.sendMessage).toBeCalledWith('Rebel Alliance');
    });

    it('clears the textarea to an empty string', () => {
      expect(textarea.getDOMNode().textContent).toEqual('');
    });
  });
});
