import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { CommentModal } from '../components/comments/CommentModal'

export const Card = ({ title, content, course, date, id, handleEdit }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-body-secondary">{course}</h6>
        <p className="card-text">{content}</p>
        {date && (
          <p className="text-muted" style={{ fontSize: '0.8rem' }}>
            Publicado el: {new Date(date).toLocaleDateString()}
          </p>
        )}

        <button
          className="btn btn-success m-2"
          data-bs-toggle="modal"
          data-bs-target={`#commentModal-${id}`}
        >
          Comentar
        </button>

        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#postsModal"
          className="btn"
          onClick={() => handleEdit({ title, content, course, id, date })}
        >
          <FaEdit />
        </button>
        {/* <button className="btn">
          <FaTrash />
        </button> */}
      </div>
      <CommentModal postId={id} />
    </div>
  )
}