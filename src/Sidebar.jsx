import React from 'react'; 
import { useGlobalContext } from "./context";
import { links, social } from "./data";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div>
      {isSidebarOpen &&
        <div className='sidebar-container'>
          <button className='close-button' onClick={closeSidebar}><p>X</p></button>
          <h3>Coding Addict</h3>
          {links.map((link)=>(
            <div className='link-cont' key={link.id}>
              <a href={link.url}>
              <p>{link.icon}</p>
              <p>{link.text}</p>
              </a>
            </div>
          ))}

          <div className='social-cont'>
          {social.map((item)=>(
            <div className='item-cont' key={item.id}>
              <a target="_blank" href={item.url}><p>{item.icon}</p></a>
            </div>
          ))}
          </div>


        </div>
      }
    </div>
  )
}
