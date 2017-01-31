/* eslint-disable */
import 'react-mdl/extra/material';
import ReactDOM from 'react-dom';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import { PostHeaderComponent } from './PostHeader.jsx';
import { Map } from 'immutable';
import sinon from 'sinon';

const methods = {
  remove() {
  },
  router:{
    push(){}
  },
  getUserPosts(){
  }
};

describe('Post Header', () => {
  beforeEach(function () {
    this.component = TestUtils.renderIntoDocument(<PostHeaderComponent post={new Map()} commentsCount={1} {...methods} />);
    this.element = ReactDOM.findDOMNode(this.component);
  });

  it('renders without problems', function () {
    expect(this.component).toExist();
  });

  it('should be tagname HEADER', function () {
    expect(this.element.tagName).toEqual('HEADER');
  });

  it('Check clicks on remove and user icon', () => {
    const listener = sinon.spy(methods, 'remove');
    const getUserListener = sinon.spy(methods, 'getUserPosts');
    const routerListener = sinon.spy(methods.router, 'push');
    const component = TestUtils.renderIntoDocument(<PostHeaderComponent remove={methods.remove} router={methods.router} user={new Map()} getUserPosts={methods.getUserPosts} post={new Map()} commentsCount={2} />);
    const element = ReactDOM.findDOMNode(component).querySelector('.remove-post-icon');
    const userButton = ReactDOM.findDOMNode(component).querySelector('.username');

    TestUtils.Simulate.click(element);
    expect(listener.called).toEqual(true);
    TestUtils.Simulate.click(userButton);
    expect(getUserListener.called).toEqual(true);
    expect(routerListener.called).toEqual(true);
  });
});