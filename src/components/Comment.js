import React from 'react'

export class Comment extends React.Component {

  constructor(props) {
    super(props);
    this.state = {author: props.author, children: props.children}
  }

  render() {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.state.author}
        </h2>
        {this.state.children.toString()}
      </div>
    );
  }

}

export default Comment
