import React from 'react'; 
import { useGlobalContext } from "./context";

export default function Modal() {
      const { isModalOpen, closeModal } = useGlobalContext()
  return (
    <div>
        {isModalOpen &&
        <div className='modal-container center'>
            <h3>Modal Content</h3>
            <button className='close-button' onClick={closeModal}><p>X</p></button>
        </div>
        }
    </div>
  )
}
