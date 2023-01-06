import React from 'react'
import { useState, useEffect, useCallback } from 'react'

import SingleDestinationCard from '../../Views/SingleDestinationCard'
import Popup from '../../Components/Popup/Popup'
import { GrAdd } from 'react-icons/gr'
import AdminNavBarButtons from '../../Components/Buttons/AdminNavBarButtons'


const ManageDestinations = () => {

  const [destinations, setDestinations] = useState([])
  const [query, setQuery] = useState([""])
  const [buttonPopup, setbuttonPopup] = useState(false)

  const token = window.localStorage.getItem("token")
  //const token = null

  if(token){

    const getUrl = () =>  {
      return 'http://localhost:4000/api/destinations/';
  };

  const getDestination = useCallback(async () => {
      const response = await fetch(getUrl());
      const result = await response.json();
      setDestinations(result);

  }, []);

  
  useEffect(() => {
      getDestination();
  }, [getDestination]);

  }

  const postSuccessCloseBox = async () => {
    setbuttonPopup(false)
  }
      



    
  return (

    
    <>

    <Popup 
    trigger={buttonPopup} 
    setTrigger={setbuttonPopup}
    postSuccessCloseBox={() => postSuccessCloseBox}
    >
    </Popup>

    <AdminNavBarButtons />
  

    <div className='w-3/5 flex flex-col mx-auto px-2'>
      <h1 className='text-3xl text-pink-800 my-6 text-center'>Manage Destinations</h1>

      <div className='flex flex-row w-full gap-4'>
      <input 
        className="outline py-1 mb-8 w-2/3 pl-2"
        type="text" 
        placeholder='Search destination...'
        onChange={(e) => setQuery(e.target.value)}
        />
      <button className='relative outline py-1 mb-8 w-1/3 hover:bg-gray-200 transition-all' onClick={() => setbuttonPopup(true)}>
      Add Destination<GrAdd className='absolute right-4 top-2 text-white' /></button>
      </div>

      
    </div>

   

        <div className="flex flex-col w-3/5 mx-auto">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="flex flex-row w-full">
                        <h3 className="w-1/4 text-md font-medium text-gray-900 px-6 py-4 text-left bg-gray-200">
                        Destination
                      </h3>
                        <h3 className="w-1/4 text-md font-medium text-gray-900 px-6 py-4 text-left bg-gray-200">
                        Country
                      </h3>
                        <h3 className="w-1/4 text-md font-medium text-gray-900 px-6 py-4 text-left bg-gray-200">
                        Added
                      </h3>
                        <h3 className="w-1/4 text-md font-medium text-gray-900 px-6 py-4 text-center bg-gray-200">
                        Edit/Delete
                      </h3>
                  </div>
                      
      
     

        {destinations.filter((destinationName) =>
        destinationName.destinationName.toLowerCase().includes(query)
        ).map((destination) => (

          <SingleDestinationCard 
          key={destination._id}
          destination={destination} />

        ))}

       
      </div>
    </div>
  </div>


 
      
      </>
  )
}

export default ManageDestinations
