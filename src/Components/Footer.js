import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div>

    <nav
      className="bg-black">
        <ul className="flex flew-row gap-4"> 
          <li className='text-pink-700 py-2 px-4'><Link to='/Adminpage'>Admin</Link></li>
        </ul>
      </nav>


      
    </div>
  )
}

export default Footer
