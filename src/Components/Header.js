import { Link } from 'react-router-dom'

const headerImage = new URL("./Images/header_image.jpg", import.meta.url) 

const Header = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn")
 

  return (

    <header className='p-6'>

    <img
    className="h-auto w-full opacity-90 relative"
    src={headerImage} alt="Headerbild" />
    
    
    
        <h1
        className="absolute text-6xl text-white top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
        font-Prosto-One bg-pink-700 py-4 px-8"
        >Europe Travel Guide</h1>
  

      <nav
      className="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
      font-Prosto-One">
        <ul className="flex flew-row gap-4">
          <li className='bg-white text-pink-700 p-4 rounded-l-2xl'><Link to='/'>Home</Link></li>
          <li className='bg-white text-pink-700 p-4'><Link to='/form'>Do Travel Form</Link></li>
          <li className='bg-white text-pink-700 p-4 rounded-r-2xl'><Link to='/about'>About</Link></li>
        </ul>

      { isLoggedIn &&
        <ul>
        <li className='bg-white text-pink-700 p-3 mt-4 text-center rounded-2xl'><Link to='/Adminpage'>Admin</Link></li>
        </ul>
      }
        
        
        
        
      </nav>
      
 
   
    </header>
  )
}

export default Header
