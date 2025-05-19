import React, { useEffect, useState } from 'react'
import { getPostRequest, updatePostRequest } from '../service/api'

export const usePosts = () => {
    const [posts, setPosts] = useState([]) 

    const getPosts = async()=>{
        try {
          const response = await getPostRequest()
          console.log('Respuesta del backend:', response);

          if(response.error){
              console.error(response.error)
              alert('Error al obtener los posts')
              return
          }
          setPosts(response.data.posts)
          
        /*  console.log(response.data.posts)
         */
         
        } catch (error) {
          console.error('Error al obtener los posts:', error)
        }
        

    }

    const updatePost = async(id, post)=>{
      const response = await updatePostRequest(id, post)
      if(response.error){
        alert('Error al actualizar la publicación')
      }
      console.log(response)
      await getPosts()
    }

    useEffect(() => {
        getPosts()
    }, [])

  return {
    posts,
    getPosts,
   isFetching: posts.length === 0,
    updatePost
  }
}