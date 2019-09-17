import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired,
  };

  render() {
    const { comment } = this.props;

    return (
      <div className="comment">
        <img src={comment.author.avatar} className="avatar" />
        <div className="content">
          <strong>{comment.author.name}</strong>
          <small>{comment.content}</small>
        </div>
      </div>
    );
  }
}

export default Comment;
