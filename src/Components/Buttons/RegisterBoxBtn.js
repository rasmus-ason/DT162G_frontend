import React from 'react'

const RegisterBoxBtn = ({registerUserBox}) => {
  return (
    <div>

        <button 
        className='text-sm outline py-1 px-2 ml-2 mt-6 md:ml-8'
        onClick={() => registerUserBox()}>Register user</button>
      
    </div>
  )
}

export default RegisterBoxBtn
