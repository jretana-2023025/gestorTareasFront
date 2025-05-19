import React from 'react'
import { CommentForm } from './CommentForm'
import { CommentList } from './CommentList'

export const CommentModal = ({ postId }) => {
  return (
    <div className="modal fade" id={`commentModal-${postId}`} tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Comentarios</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
          </div>
          <div className="modal-body">
            <CommentForm postId={postId} />
            <hr />
            <CommentList postId={postId} />
          </div>
        </div>
      </div>
    </div>
  )
}