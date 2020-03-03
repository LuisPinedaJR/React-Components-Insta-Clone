// You will add code in this file
import React, { useState } from 'react'
import CommentSection from '../CommentSection/CommentSectionContainer'
import LikeSection from './LikeSection'
import PostHeader from './PostHeader'

import './Posts.css'

// pass props in this file to
const Post = props => {
  // set up state for the likes

  // const [state, setState] = useState(dummyData)
  //const [postState, postSetState] = useState(post)

  const [postLikes, setLikes] = useState(props.likes)

  return (
    <div className="post-border">
      <PostHeader username={props.username} thumbnailUrl={props.thumbnailurl} />
      <div className="post-image-wrapper">
        <img alt="post thumbnail" className="post-image" src={props.imageurl} />
      </div>
      <LikeSection
        likes={props.likes}
        postLikes={postLikes}
        setLikes={setLikes}
      />
      <CommentSection postId={props.imageurl} comments={props.comments} />
    </div>
  )
}

export default Post
