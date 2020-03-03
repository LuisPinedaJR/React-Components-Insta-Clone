// You will add code to this file
import React, { useState } from 'react'
import CommentInput from './CommentInput'
import Comment from './Comment'
import './Comment.css'

const CommentSection = props => {
  // Add state for the comments
  const [commentState, commentSetState] = useState(props.comment)
  const comm = Object.values(props.comments)
  console.log(comm)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comm.map((c, i) => {
        console.log(c)
        return <Comment key={i} comment={c} />
      })}
      <CommentInput />
    </div>
  )
}

export default CommentSection
