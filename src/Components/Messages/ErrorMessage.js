import React from 'react'

//Send prop to component
const ErrorMessage = ({message}) => {
  return (
    <div >
        {/* Include prop as text */}
        <span className="text-red-600">{message}</span>   
    </div>
  )
}
//Default values
ErrorMessage.defaultProps = {
    message: "Error",
    textColor: 'red'

}

export default ErrorMessage
