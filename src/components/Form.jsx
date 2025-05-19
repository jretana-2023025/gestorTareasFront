import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { usePosts } from '../shared/usePosts'


export const Form = ({post}) => {

  const { updatePost } = usePosts()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',
    defaultValues: post
  })

  useEffect(() => {
    if(post) {
      reset({
        _id: post.id || '',
        title: post.title || '',
        content: post.content || '',
        course: post.course || '',
        date: post.date || '',
        comment: post.comment || ''
      })
    }else{
      reset()
    }
  }, [post, reset])

  const submit = (post)=>{
      console.log(post)
      updatePost(post._id, post)
  }


  return (
    <form onSubmit={handleSubmit(submit)}  className='w-100'>
      <div className="mb-3">
        <label htmlFor="title">Titulo</label>
        <input 
          {...register('title', {required: 'El título es obligatorio'})}
          id='title'
          type="text"
          className='form-control'
        />
          { errors.title && <p>{errors.title.message}</p>}
      </div>
     
      <div className="mb-3">
        <label htmlFor="content">Contenido</label>
        <textarea 
          {...register('content', {required: 'El contenido es obligatorio'})}
          id='content'
          type="text"
          className='form-control'
        />
        { errors.content && <p>{errors.content.message}</p>}
      </div>
         <div className="mb-3">
        <label htmlFor="course">Cursos</label>
        <input 
          {...register('course', {required: 'El curso es obligatorio'})}
          id='course'
          type="text"
          className='form-control'
        />
        { errors.course && <p>{errors.course.message}</p>}
      
      </div>
            {post?.date && (
        <div className="mb-3">
          <label htmlFor="date">Fecha</label>
          <input
            {...register("date")}
            id="date"
            type="text"
            className="form-control"
            readOnly
          />
        </div>
      )}

      <div className="d-flex justify-content-center ms-2">
        <button className='btn btn-danger'>
          Cancelar
        </button>
        <button type='submit' className='btn btn-success ms-2'>
          { post.title ? 'Actualizar' : 'Agregar'}
        </button>
      </div>
    </form>
  )
}