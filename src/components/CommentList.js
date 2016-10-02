import React, { PropTypes } from 'react';

import Comment from './Comment';

const CommentList = ({ comments }) => (
  <div className="commentList">
    {comments.map(comment => 
      <Comment
        key={comment.id}
        {...comment}
      />
    )}
  </div>
)

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CommentList
