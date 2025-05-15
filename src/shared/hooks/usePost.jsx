import React,{useState} from 'react'
import toast from 'react-hot-toast'
import { createPostRequest } from '../../services/api'

export const usePost = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const createPost = async (title, content,course,data) => {
        setIsLoading(true)
        const postData = {
            title,
            content,
            course,
            data
        }
        const response = await createPostRequest(postData)
        
        if(response.error){
            setError(true)
            return toast.error(
                response?.error?.response?.data?.msg||
                response?.error?.data?.msg||
                'Error al crear una publicación'
            )
        }

        setError(false)
        toast.success('Publicación creada con éxito')
        return response.data
    }

  return {
    createPost,
    isLoading,
    error,
    setError
  }
}
