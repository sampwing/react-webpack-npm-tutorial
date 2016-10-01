// main.js
var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  getInitialState: function() {
    return {data: []};
  },
  render: function() {
    return (
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function(comment) {
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello world, I am a commentForm!
      </div>
    );
  }
});

var Comment = React.createClass({
  render: function() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children.toString()}
      </div>
    );
  }
});

var data = [
  {id: 1, author: "Peter", text: "My comment"},
  {id: 2, author: "Sam", text: "My other comment"}
]

ReactDOM.render(
  <CommentBox data={data} />,
  //<CommentBox url="/api/comments" />,
  document.getElementById('content')
);
