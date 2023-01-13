import React from 'react'
import { useState } from 'react'
import Login from '../Views/Admin/Auth/Login'
import ManageDestinations from '../Views/Admin/ManageDB/ManageDestinations'
import Register from './Admin/Auth/Register'
import RegisterBoxBtn from '../Components/Buttons/RegisterBoxBtn'


const AdminContainer = () => {

    const isLoggedIn = window.localStorage.getItem("loggedIn")

    const [AdminView, setAdminView] = useState('')

   
    

    const registerUserBox = () => {
      setAdminView("register")
    }
      

    

    


  return (
    <div>


      {!isLoggedIn &&
      <Login 
      />
      }

      { isLoggedIn && AdminView !== "register" &&
      <RegisterBoxBtn
      registerUserBox={registerUserBox}
       />
      }

      {AdminView == "register" &&
      <Register
      closeRegisterBoxClicked={() => setAdminView("")} 
      />

      }
      { isLoggedIn &&
      <ManageDestinations />
      }

     
      
        
    
    </div>
  )
}

export default AdminContainer
