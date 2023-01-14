import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import ErrorMessage from '../../../Components/Messages/ErrorMessage'

const Login = ({displayRegisterBox}) => {

  //states
  const [emailLogin, setEmailLogin] = useState('')
  const [passwordLogin, setPasswordLogin] = useState('')
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false)

  // const clickedRegisterBox = () => {
  //   displayRegisterBox()
  // }

    //Submitting
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
          //Check response status
          if(data.status == "ok"){
            alert("Login Successful")
            location.reload()
            //Store token and variable in local storage - use loggedIn to check if user is logged in
            window.localStorage.setItem("token", data.data)
            window.localStorage.setItem("loggedIn", true)
            
          }else {
            setDisplayErrorMsg(true)
          }
        })     
    }
  return (
    //Log in form container
    <div className=' bg-gray-100 w-5/6 sm:w-3/5 md:w-2/5 lg:w-1/4 p-4 mx-auto mt-16 shadow-xl '>
      <div className='relavtive'>
         <div 
          className='absolute top-4 left-4 bg-white p-2 rounded-full hover:cursor-pointer'>
          <Link to={'/'}><BsArrowLeft size={24}/></Link>
          </div>

        <h1 className='text-pink-700 text-center text-2xl mb-4'>Login</h1>

        {/* Log in form */}
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

            {/* Display error message if email/password is wrong */}
            {displayErrorMsg &&
            <ErrorMessage 
            message="Invalid email or password"
            />
            }
            <input className='w-full bg-gray-800 text-white shadow-md mt-6 py-1' type="submit" value="Login" /> 
        </form>
      </div>
    </div>
  )
}

export default Login
