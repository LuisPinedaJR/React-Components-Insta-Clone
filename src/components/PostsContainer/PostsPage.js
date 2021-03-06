//Complete the necessary code in this file
// import useState
import React, { useState } from 'react'
import Post from './Post'
import './Posts.css'
// import data
import dummyData from '../../dummy-data'

const PostsPage = () => {
  // set up state for your data
  const [state, setState] = useState(dummyData)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */
      state.map(post => {
        return <Post post={post} key={post.timestamp} />
      })}
    </div>
  )
}

export default PostsPage
