// main.js
var React = require('react');
var ReactDOM = require('react-dom');

// React.createClass
var CommentBox = React.createClass({displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: 'commentBox'},
        "Hello, i am comment box!."
      )
    );
  }
})

ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
