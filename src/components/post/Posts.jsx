
import { useEffect, useState } from 'react'
import { usePosts } from '../../shared/usePosts'
import { Card } from '../Card'
import { Modal } from '../Modal'

const courses = ['todos', 'taller', 'tecnologia', 'tics']

export const Posts = () => {
  const { posts, isFetching } = usePosts()
  const [isEdit, setIsEdit] = useState(false)
  const [post, setPost] = useState({})
  const [selectedCourse, setSelectedCourse] = useState('todos')

  const handleAdd = () => {
    setPost({})
    setIsEdit(false)
  }

  const handleEdit = (post) => {
    setPost(post)
    setIsEdit(true)
  }

  const filteredPosts = selectedCourse === 'todos'
    ? posts
    : posts.filter(p => p.course.toLowerCase() === selectedCourse)

  if (isFetching) return <span>Cargando...</span>

  return (
    <div className="container">
      <Modal isEdit={isEdit} post={post} />
      <div className="text-center my-4">
        <h2>Publicaciones</h2>
       {/*  <button
          type="button"
          className="btn btn-info mb-3"
          data-bs-toggle="modal"
          data-bs-target="#postsModal"
          onClick={handleAdd}
        >
          Agregar publicación
        </button>
 */}
       
        <div className="btn-group mb-4">
          {courses.map(course => (
            <button
              key={course}
              className={`btn ${selectedCourse === course ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setSelectedCourse(course)}
            >
              {course.charAt(0).toUpperCase() + course.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="d-flex flex-wrap align-items-center justify-content-center">
        {filteredPosts.map((post) => (
          <div key={post._id} className="m-3">
            <Card
              handleEdit={handleEdit}
              title={post.title}
              content={post.content}
              course={post.course}
              date={post.date}
              id={post._id}
            />
          </div>
        ))}
        {filteredPosts.length === 0 && (
          <p className="text-muted">No hay publicaciones para este curso.</p>
        )}
      </div>
    </div>
  )
}
