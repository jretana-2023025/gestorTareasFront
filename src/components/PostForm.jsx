import React,{useState} from 'react'
import { usePost } from '../shared/hooks/usePost'

export const PostForm = () => {
    const [form, setForm] = useState({
        title: '',
        content: '',
        course: '',
        data: ''
    })
    const { createPost, isLoading } = usePost()

    const handleChange = (e) => {
        const { name, value } = e.target
       setForm(prev=>({
            ...prev,
            [name]: value
       
       }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createPost(form.title, form.content, form.course, form.data)
    }

  return (
   <form onSubmit={handleSubmit} className='form-container'>
       <input
        type="text"
        name="title"
        placeholder="Título"
        value={form.title}
        onChange={handleChange}/>

       <textarea
        name="content"
        placeholder="Contenido"
        value={form.content}
        onChange={handleChange}
       />

       <select
        name=' course'
        onChange={handleChange}
        value={form.course}
        >
            <option value="">Selecciona un curso</option>
            <option value="curso1">Taller</option>
            <option value="curso2">Tecnologia</option>
            <option value="curso3">Practica Sup</option>
       </select>
         <input
          type="text"
          name="data"
          value={form.data}
          onChange={handleChange}/>

         <button type="submit" disabled={isLoading}>Publicar</button>

    </form>
  )
}

export default PostForm
