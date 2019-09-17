import React, { Component } from 'react';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <span className="logo">Facebook</span>
        </div>
      </div>
    );
  }
}

export default Header;
