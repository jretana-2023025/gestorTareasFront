import React from 'react'
import { Form } from './Form'

export const Modal = ({ isEdit, setIsEdit, post }) => {
  return (
    <div className="modal fade" id="postsModal" tabIndex="-1" aria-labelledby="postsModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="postsModalLabel">
              { isEdit ? 'Editar publicación' : 'Agregar publicación'}
            </h1>
            <button  
              type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"
              onClick={()=> setIsEdit(false)}
              ></button>
              
          </div>
          <div className="modal-body">
            <Form post={post} />
          </div>
        </div>
      </div>
    </div>
  )
}