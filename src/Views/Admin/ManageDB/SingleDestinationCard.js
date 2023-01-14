import React from 'react'
import { useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import { BiHighlight } from 'react-icons/bi';

const SingleDestinationCard = ({destination, deleteDestination, openEditDestination}) => {

    const [displayDestinationList, setDisplayDestinationList] = useState(true)

  return (
    <div>
      { displayDestinationList && 
        <div className="w-full flex flex-row bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

          <p className="w-1/4 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {destination.destinationName}
          </p>

          <p className="w-1/4 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {destination.country}
          </p>

          <p className="w-1/4 text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {destination.createdAt.substr(0,10)}
          </p>

          <div className="w-1/4 text-center mt-4">

            {/* Delete destination button */}
            <button 
              className="mr-3" 
              title="Edit destination"
              onClick={() => {openEditDestination(destination._id)}} > 
              <BiHighlight />
            </button> 

            {/* Update destionation button */}
            <button 
              className="ml-3" 
              title="Delete destination"
              onClick={() => {deleteDestination(destination._id, destination.destinationName)}} >
              <BiTrash /> 
            </button>
          </div>
        </div>           
      }  
    </div>
  )
}

export default SingleDestinationCard
