import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminNavBarButtons from '../../Components/Buttons/AdminNavBarButtons'
import Login from './Login'
import ManageDestinations from './ManageDestinations'
import Register from './Register'


const AdminContainer = () => {

    const isLoggedIn = window.localStorage.getItem("loggedIn")

    const [AdminView, setAdminView] = useState('')

   
    const closeRegisterBox = () => {
      setAdminView("")
    }

    const displayCreateUserBox = async () => {
      setAdminView("register")
    }
     


  return (
    <div>


      {isLoggedIn &&
        <AdminNavBarButtons 
        displayCreateUserBox={displayCreateUserBox}
        />
      }

     

   

      {!isLoggedIn &&
      <Login 
      />
      }

      {AdminView === "register"  && isLoggedIn &&
      <Register
      closeRegisterBox={closeRegisterBox} 
      />

      }
      { isLoggedIn &&
      <ManageDestinations />
      }
      
        
    
    </div>
  )
}

export default AdminContainer
