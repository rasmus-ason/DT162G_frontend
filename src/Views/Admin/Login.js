import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({displayRegisterBox}) => {

  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')

  const clickedRegisterBox = () => {
    displayRegisterBox()
  }

    const handleLogin = (e) => {

        e.preventDefault();

        fetch("http://localhost:5000/api/admin/login", {
          method: "POST",
          crossDomain:true,
          headers: {
            "Content-Type" : "application/json",
            Accept : "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            email:emailLogin,
            password:passwordLogin
          })
          }
        )
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegistration")
          if(data.status == "ok"){
            alert("login successful")
            window.localStorage.setItem("token", data.data)
            window.localStorage.setItem("loggedIn", true)
            
          }
        })



        
    }


  return (
    
    <div className=' bg-gray-100 w-1/4 p-4 mx-auto mt-6 shadow-xl '>

        <div className='relavtive'>

        <h1 className='text-pink-700 text-center text-2xl mb-4'>Login</h1>

        <form onSubmit={handleLogin} className='flex flex-col'>
            <label>E-mail</label>
            <input 
            className='shadow-xl' 
            type="email"
            onChange={(e) => setEmailLogin(e.target.value)}
            />

            <label>Password</label>
            <input 
            className='shadow-xl' 
            type="password"
            onChange={(e) => setPasswordLogin(e.target.value)}
            />

            <input className='w-full bg-gray-800 text-white shadow-md mt-6 py-1' type="submit" value="Login" />

            
        </form>
        
        </div>
      
    
    </div>
  )
}

export default Login
