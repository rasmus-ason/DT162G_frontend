import React from 'react'
import { useState, useEffect, useCallback } from 'react'

import SingleDestinationCard from './SingleDestinationCard'
import { GrAdd } from 'react-icons/gr'
import AddDestination from '../../DB-form/Add/AddDestination'
import EditDestination from '../../DB-form/Edit/EditDestination'



const ManageDestinations = () => {

  //States
  const [destinations, setDestinations] = useState([])
  const [query, setQuery] = useState([""])
  const [displayAddForm, setDisplayAddForm] = useState(false)
  const [displayEditForm, setDisplayEditForm] = useState(false)
  const [destinationId, setDestionationId] = useState('')
  //Token variable
  const token = window.localStorage.getItem("token")

  //Load if token exist
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


  //Function that delete destination
  const deleteDestination = async (id, name) => {

    //Store message in variable
    let text = "Are you sure you want to delete " + name + " from the database?";

    //Let user confirm action
    if (confirm(text) == true) {

    await fetch('http://localhost:4000/api/destinations/' + id, {
      method: 'DELETE'
      })
      .then(response => response.json())
      .then(data => console.log(data));

    //Keep array synced with db
    setDestinations(destinations.filter((des) => des._id != id))
      }
    }

    //Get data of newly added destionation - function update state and hide edit form component
    const newDestinationAdded = async (newdata) => {

      setDestinations(destinations => [...destinations, newdata]);
      setDisplayAddForm(false)
      
    }

    //Open edit form component and send id of destination to component
    const openEditDestination = async (id) => {

        setDisplayEditForm(true)
        setDestionationId(id)
    }

    //Get data from newly updated destionation - delete and add data to state
    const updatedDestination = (destination) => {

      setDestinations(destinations.filter((des) => des._id != destination._id))
      setDestinations(destinations => [...destinations, destination]);
    }
 
  return ( 
    <div>

        {/* Add form component */}
        { displayAddForm &&
        <AddDestination
        closeAddForm={() => setDisplayAddForm(false)}
        newDestinationAdded={newDestinationAdded}
        />
        }

        {/* Edit form component */}
        { displayEditForm &&
        <EditDestination
        closeEditForm={() => setDisplayEditForm(false)}
        destinationId={destinationId}
        updatedDestination={updatedDestination}
        />
        }
    
      {/* Search field, add-button and heading on table */}
      <div className='w-5/6 md:w-4/5 lg:w-3/5 flex flex-col mx-auto px-2'>
          <h1 className='text-3xl text-pink-800 my-6 text-center'>Manage Destinations</h1>

            <div className='flex flex-col w-full sm:flex-row gap-4'>
                <input 
                className="outline py-1 h-8 w-full sm:w-2/3 pl-2"
                type="text" 
                placeholder='Search destination...'
                onChange={(e) => setQuery(e.target.value)}
                />
                <button className='relative outline py-1 mb-8 w-full sm:w-1/3 hover:bg-gray-200 transition-all' onClick={() => setDisplayAddForm(true)}>
                Add Destination<GrAdd className='absolute right-4 top-2 text-white' /></button>
            </div>
      </div>
        <div className="flex flex-col w-5/6 md:w-4/5 lg:w-3/5 mx-auto overflow-y-auto h-96 shadow-xl">
            <div className="sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full sm:px-6 lg:px-8">
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
                      
        {/* Send unique destionation to component - includes state of search that filter destionations */}
        {destinations.filter((destinationName) =>
        destinationName.destinationName.toLowerCase().includes(query)
        ).map((destination) => (

        <SingleDestinationCard 
        key={destination._id}
        destination={destination}
        deleteDestination={deleteDestination}
        openEditDestination={openEditDestination} 
        />

        ))}
      </div>
    </div>
  </div>
</div>
  )
}

export default ManageDestinations
