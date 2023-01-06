import React from 'react'
import EditDestinationContainer from '../../Views/DB-form/EditDestinationContainer'
import { IoClose } from 'react-icons/io5';


const PopupEdit = (props) => {

  
   


  return (props.triggerEdit) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="absolute right-6 top-6" onClick={() => props.setTriggerEdit(false)}><IoClose size={24} /></button>
            <EditDestinationContainer destinationID={props.destinationID} />
        </div>
    </div>
  ) : "";
}

export default PopupEdit