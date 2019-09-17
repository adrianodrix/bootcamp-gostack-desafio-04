import React, { Component } from 'react';
import './style.css';

import Data from '../../assets/data.json';
import Post from '../post';

class PostList extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.setState({ posts: Data });
  }

  render() {
    return (
      <div className="post-list">
        {this.state.posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
