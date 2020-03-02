// You will add code to this file
import React, { useState } from 'react'
import CommentInput from './CommentInput'
import Comment from './Comment'
import './Comment.css'

const CommentSection = ({ comments }) => {
  // Add state for the comments

  const [newComments, setComments] = useState(comments)
  return (
    <div>
      {/* map through the comments data and return the Comment component */
      newComments.map(comment => {
        console.log(comment)
        return <Comment comment={comment} setComments={setComments} />
      })}

      <CommentInput />
    </div>
  )
}

export default CommentSection
