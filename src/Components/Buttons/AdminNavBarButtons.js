import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavBarButtons = ({displayCreateUserBox}) => {

  const logOut = () => {
    
    window.localStorage.clear();
    
  }  
  const displayCreateUserBoxClicked =  () => {
    displayCreateUserBox()
  } 


  return (

    <div className='w-full px-6 bg-gray-100 py-1 mx-auto flex flex-row gap-4'>
        <button onClick={() => displayCreateUserBoxClicked()} >Create User</button>
        <button onClick={() => logOut()} >Log out</button>
         
    </div>
      
  
  )
}

export default AdminNavBarButtons
