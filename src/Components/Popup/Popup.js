import React from 'react'
import AddDestination from '../../Views/DB-form/AddDestination';
import { IoClose } from 'react-icons/io5';


const Popup = (props) => {

 

  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="absolute right-6 top-6" onClick={() => props.setTrigger(false)}><IoClose size={24} /></button>
            <AddDestination 
            postSuccessCloseBox={() => props.setTrigger(false)} />
        </div>
    </div>
  ) : "";
}

export default Popup
