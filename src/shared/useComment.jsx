// shared/useComments.js
import { useState } from 'react'
import { createCommentRequest, getCommentRequest } from '../service/api'

export const useComment = () => {
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const getComments = async (postId) => {
    setIsLoading(true)
    const response = await getCommentRequest(postId)
    if (!response.error) {
      setComments(response.data.comments)
    } else {
      alert('Error al obtener comentarios')
    }
    setIsLoading(false)
  }

  const createComment = async (data) => {
    const response = await createCommentRequest(data)
    if (!response.error) {
      await getComments(data.post)
    } else {
      alert('Error al crear comentario')
    }
  }

  return {
    comments,
    isLoading,
    getComments,
    createComment
  }
}
