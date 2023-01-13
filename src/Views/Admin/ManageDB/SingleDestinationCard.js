import React from 'react'
import { useState } from 'react'
import { BiTrash } from 'react-icons/bi';
import { BiHighlight } from 'react-icons/bi';






const SingleDestinationCard = ({destination, deleteDestination, openEditDestination}) => {


    const [displayEditForm, setDisplayEditForm] = useState(false)
    const [displayDestinationList, setDisplayDestinationList] = useState(true)
   

    const [buttonPopupEdit, setbuttonPopupEdit] = useState(false)





     

    

  return (
    <div className="">

                    
            {/* <PopupEdit 
            triggerEdit={buttonPopupEdit} 
            setTriggerEdit={setbuttonPopupEdit}
            destinationID={sendId}
            >
            </PopupEdit> */}
             

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

                  <button 
                    className="mr-3" 
                    title="Edit destination"
                    onClick={() => {openEditDestination(destination._id)}} > 
                    <BiHighlight />
                  </button> 

                  <button 
                    className="ml-3" 
                    title="Delete destination"
                    onClick={() => {deleteDestination(destination._id, destination.destinationName)}} >
                    <BiTrash /> 
                  </button>
                </div>
              </div>
                    





              // <h3><strong>Destination: </strong> {destination.destinationName}</h3>
              //   <p><strong>Country: </strong>{destination.country}</p>
              //   <p><strong>Created: </strong>{destination.createdAt.substr(0,10)}</p>
              //   <p><strong>Updated: </strong>{destination.updatedAt.substr(0,10)}</p>







              

              /* <button 
              onMouseOver={() => {displayRatings()}} 
              onMouseLeave={() => {hideRatings()}} 
              >Hover me</button>

              { hideRatingBox &&
                  <div id="ratings">

                      <p><strong>Food: </strong>{foodrating}</p>

                  </div>
              } */

           
            }
            
            
            

      
    </div>
  )
}

export default SingleDestinationCard
