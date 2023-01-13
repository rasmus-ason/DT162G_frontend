import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn")

  const logOut = () => {
    
    window.localStorage.clear();
    location.reload()
    
  } 

  return (
    <footer className='fixed bottom-0 w-full'>

    <nav
      className="bg-gray-900">
        <ul className="flex flew-row gap-4"> 
          { isLoggedIn &&
          <li 
          className='text-white py-2 px-4'>
          <Link to='/'>To user page</Link>
          </li>
          }
          
          <li 
          className='text-white py-2 px-4'>
          <Link to='/Adminpage'>Admin</Link>
          </li>
          
          { isLoggedIn &&
          <li 
          className='text-white py-2 px-4'
          onClick={() => logOut()}
          >Logout
          </li>
          }
        </ul>
      </nav>


      
    </footer>
  )
}

export default Footer
