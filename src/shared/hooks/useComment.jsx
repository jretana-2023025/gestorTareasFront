import React,{useState}from 'react'
import toast from 'react-hot-toast'
import { createCommentRequest } from '../../services/api'

export const useComment = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const createComment = async (user, text, date, postId) => {
        setIsLoading(true)
        //puede que salga error aqui(recordatorio)
        const commentData = {
            user,
            text,
            date,
            post:
            postId
        }
        const response = await createCommentRequest(commentData)
        setIsLoading(false)

        if(response.error){
            setError(true)
            return toast.error(
                response?.error?.response?.data?.msg||
                response?.error?.data?.msg||
                'Error al crear un comentario'
            )
            
        }

        setError(false)
        toast.success('Comentario creado con éxito')
        return response.data
        
    }

  return {
    createComment,
    isLoading,
    error,
    setError
  }
}
