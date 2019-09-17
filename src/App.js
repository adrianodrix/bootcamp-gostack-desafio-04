import React from 'react';
import './styles/App.css';

import Header from './components/header';
import PostList from './components/postList';

function App() {
  return (
    <div>
      <Header />
      <PostList />
    </div>
  );
}

export default App;
