//Import
import React from 'react'
import { useState } from 'react'
import Login from '../Views/Admin/Auth/Login'
import ManageDestinations from '../Views/Admin/ManageDB/ManageDestinations'
import Register from './Admin/Auth/Register'
import RegisterBoxBtn from '../Components/Buttons/RegisterBoxBtn'


const AdminContainer = () => {

    //Check if user is logged in
    const isLoggedIn = window.localStorage.getItem("loggedIn")
    //Set state to null
    const [AdminView, setAdminView] = useState('')

    //Set state to show register box
    const registerUserBox = () => {
      setAdminView("register")
    }
   
  return (
    <div>

      {/* Display if user is not logged in */}
      {!isLoggedIn &&
      <Login 
      />}

      {/* Display if user is logged in and state is not set to register */}
      { isLoggedIn && AdminView !== "register" &&
      <RegisterBoxBtn
      registerUserBox={registerUserBox}
       />}

      {/* Display if  state is set to register */}
      {AdminView == "register" &&
      <Register
      closeRegisterBoxClicked={() => setAdminView("")} 
      />}

      {/* Display is user is logged in */}
      { isLoggedIn &&
      <ManageDestinations />}

    </div>
  )
}

export default AdminContainer
