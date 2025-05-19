import React, { useEffect } from 'react'
import { useComment } from '../../shared/useComment'

export const CommentList = ({ postId }) => {
  const { comments, getComments, isLoading } = useComment()

  useEffect(() => {
    if (postId) {
      getComments(postId)
    }
  }, [postId])

  if (isLoading) return <p>Cargando comentarios...</p>

  return (
    <div>
      <h5>Comentarios:</h5>
      {comments.length === 0 && <p>No hay comentarios todavía.</p>}
      <ul className="list-group">
        {comments.map(comment => (
          <li key={comment._id} className="list-group-item">
            <strong>{comment.user}</strong>: {comment.text}
            <div className="text-muted" style={{ fontSize: '0.8rem' }}>
              {new Date(comment.date).toLocaleString()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}