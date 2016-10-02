import React, { PropTypes } from 'react'

const Comment = ({ author, text }) => (
  <div className="comment">
    <h2 className="commentAuthor">
      { author }
    </h2>
    { text }
  </div>
)

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default Comment
