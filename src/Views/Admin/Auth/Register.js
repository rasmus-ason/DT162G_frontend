import React from 'react'
import ErrorMessage from '../../../Components/Messages/ErrorMessage'
import { useState } from 'react'
import { json } from 'react-router-dom'

const Register = ({closeRegisterBoxClicked}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')  
  const [displayErrorMsg, setDisplayErrorMsg] = useState(false)
  const [toShortMessage, setToShortMessage] = useState(false)


 

  const handleRegistration = (e) => {

    e.preventDefault()

    //Control password length
    if(password.length >= 6) {
      
        const registerBody = {
          email,
          password
        }

        fetch("http://localhost:5000/api/admin/register", {
          method: "POST",
          crossDomain:true,
          headers: {
            "Content-Type" : "application/json",
            Accept : "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify(registerBody)
          }
        )
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegistration")
          if(data.status == "ok"){
            alert("registration successful")
            location.reload()
            window.localStorage.setItem("token", data.data)
            window.localStorage.setItem("loggedIn", true)
          }else {
            setDisplayErrorMsg(true)
          }
        })
        
        //Display message if password is to short
        }else {
          setToShortMessage(true)
          return
          }

      }
  

  return (
    <div className=' bg-gray-100 w-5/6 sm:w-3/5 md:w-2/5 lg:w-1/4 p-4 mx-auto my-20 shadow-xl '>

        <div className='relavtive'>

        <h1 className='text-pink-700 text-center text-2xl mb-4'>Register User</h1>

        <form onSubmit={handleRegistration} className='flex flex-col'>
            <label>E-mail</label>
            <input 
            className='shadow-xl' 
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input 
            className='shadow-xl' 
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            />

            <input className='w-full bg-gray-800 text-white shadow-md mt-6 py-1' type="submit" value="Register" />

            {displayErrorMsg &&
            <ErrorMessage 
            message="Something went wrong with the registraion!"
            />
            }
            {toShortMessage &&
            <ErrorMessage 
            message="Password has to be at least 6 characters long"
            />
            }

        </form>

        <span 
            onClick={() => closeRegisterBoxClicked()} 
            className='text-sm text-left text-pink-700 w-1/3 my-2 hover:underline hover:cursor-pointer'>
            Close</span>

        
        </div>
      
    
    </div>
  )
}

export default Register
