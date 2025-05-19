import React from 'react'
import { useForm } from 'react-hook-form'
import { useComment } from '../../shared/useComment'

export const CommentForm = ({ postId }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { createComment } = useComment()

  const onSubmit = async (data) => {
    await createComment({ ...data, post: postId })
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-2">
        <input
          {...register('user', { required: 'Tu nombre es obligatorio' })}
          placeholder="Tu nombre"
          className="form-control"
        />
        {errors.user && <p>{errors.user.message}</p>}
      </div>
      <div className="mb-2">
        <textarea
          {...register('text', { required: 'El comentario no puede estar vacío' })}
          placeholder="Escribe un comentario..."
          className="form-control"
        />
        {errors.text && <p>{errors.text.message}</p>}
      </div>
      <button type="submit" className="btn btn-primary">Comentar</button>
    </form>
  )
}