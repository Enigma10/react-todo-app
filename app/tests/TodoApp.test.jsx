var react = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp =require('Todo');

describe('TodoApp', () =>{
  it('should exist',() => {
    expect(TodoApp).toExist();
  });
});
