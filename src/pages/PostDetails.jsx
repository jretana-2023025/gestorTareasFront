import React from 'react'
import CommentForm from '../components/CommentForm'

export const PostDetails = () => {
    const {id}= useParams()
  return (
    <div>
        <h2>Detalle del post</h2>
        <CommentForm  PostId={id}/>
    </div>
  )
}
