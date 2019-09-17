import React, { Component } from 'react';
import './style.css';

import PropTypes from 'prop-types';
import Comment from './comment';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  };

  render() {
    const { post } = this.props;

    return (
      <div className="post">
        <div className="container">
          <img src={post.author.avatar} className="avatar" />
          <p className="post-author">
            <strong>{post.author.name}</strong>
            <br />
            <small className="date">{post.date}</small>
          </p>
          <p>{post.content}</p>
          <hr />
          {post.comments.map(comment => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    );
  }
}

export default Post;
