import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div >

        <span className="text-red-600">{message}</span>
      
    </div>
  )
}

ErrorMessage.defaultProps = {
    message: "Error",
    textColor: 'red'

}

export default ErrorMessage
