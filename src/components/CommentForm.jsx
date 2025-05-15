import React,{useState} from 'react'

export const CommentForm = () => {
   const [form, setForm] = useState({
       user: '',
       text: '',
       date: '',
       //postId: ''
   })
   const { createComment, isLoading } = useComment()

   const handleChange = (e) => {
         const { name, value } = e.target
        setForm(prev=>({
              ...prev,
              [name]: value
         
        }))
   }

    const handleSubmit = async (e) => {
         e.preventDefault()
         await createComment(form.user, form.text, form.date)
         setForm({
            user: '',
            text: '',
            date: ''
         })
        }

  return (
    
    <form onSubmit={handleSubmit} className='form-container'> 
        <input
         type="text"
         name="user"
         placeholder="Usuario"
         value={form.user}
         onChange={handleChange}/>

        <textarea
         name="text"
         placeholder="Comentario"
         value={form.text}
         onChange={handleChange}
        />

        <input
         type="date"
         name="date"
         value={form.date}
         onChange={handleChange}/>

        <button type="submit" disabled={isLoading}>Comentar</button>
    </form>
  )
}

export default CommentForm
