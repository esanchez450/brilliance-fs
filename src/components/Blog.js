import React from 'react';
import '../css/blog.css';

const Blog = () => {
  return (
    <div className='blog'>

      <div className='blog-title'>
        <h1>Blog Page</h1>
      </div>

      {/* <br></br> */}

      <div className='blog-container'>
        <ul>
          <p className='blog-container-title'>Case Studies</p>
        </ul>
      </div>
    </div>
  );
}

export default Blog;