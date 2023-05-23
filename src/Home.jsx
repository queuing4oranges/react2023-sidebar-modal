import React from 'react'; 
import { useGlobalContext } from "./context";
import { FaWpforms } from 'react-icons/fa';

export default function Home() {
      const { openSidebar, openModal } = useGlobalContext()

  return (
    <div className='button-container'>
        <button className='open-sidebar' onClick={openSidebar}><p><FaWpforms/></p></button>
        <button className='open-modal center' onClick={openModal}>Open Modal</button>
    </div>
  )
}
