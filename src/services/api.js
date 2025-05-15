import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:2636',
    timeout: 2000,
})

export const createPostRequest = async (data) => {
    try {
        return await apiClient.post('/post/createPosts', data,{
            type: 'multipart/form-data',
        })
        
    } catch (error) {
        return {
            error: true,
            err
        }
    }
}

export const createCommentRequest = async (data) => {
    try {
        return await apiClient.post('/comments/createComment', data,{
            type: 'multipart/form-data',
        })
        
    } catch (error) {
        return {
            error: true,
            err
        }
    }
}