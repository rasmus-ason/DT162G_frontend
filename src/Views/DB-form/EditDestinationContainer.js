import { useState, useEffect, useCallback } from 'react'

import EditForm from './EditForm';


const EditDestination = ({destinationID}) => {

    

    
    const [destination, setDestination] = useState([])
    
        

        const getDestination = useCallback(async () => {
            const response = await fetch('http://localhost:4000/api/destinations/' + destinationID);
            const result = await response.json();
            setDestination(result);

        }, [destinationID]);

        
        useEffect(() => {
            getDestination();
        }, [getDestination]);
    

    
 

  return (
    <div>
       

        <EditForm 
        destination={destination} 
        />
      
    </div>
  )
}

export default EditDestination

