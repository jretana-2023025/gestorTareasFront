import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:2636",
    timeout: 3000,
})



//crear post

export const getPostRequest = async () => {
    try {
        return await apiClient.get("/v1/post/getposts");
        
    } catch (error) {
        return{
            error: true,
            error
        }
    }
}

export const updatePostRequest = async (id, data) => {
    try {
        return await apiClient.put(`/v1/post/updatePost/${id}`, data);
    } catch (error) {
        return{
            error: true,
            error
        }
    }
}

export const  getCommentRequest = async (postId) => {
    try {
        return await apiClient.get(`/v1/comments/getComments/${postId}`);
        
    } catch (error) {
        return{
            error: true,
            error
        }
        
    }
}

export const createCommentRequest = async (data) => {
    try {
        return await apiClient.post("/v1/comments/createComment", data);
        
    } catch (error) {
        return{
            error: true,
            error
        }
        
    }
}