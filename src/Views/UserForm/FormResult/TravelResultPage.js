import React from 'react'

const TravelResultPage = ({destination}) => {

  return (
 
  <div className='w-5/6 sm:w-2/3 mx-auto bg-gray-100 text-center flex flex-col my-8 px-4 py-8 font-Poppins shadow-xl'>     
      <h3 className='font-bold text-pink-700 text-3xl'>{destination.destinationName}</h3>
      <h4 className='font-bold'>In {destination.country}</h4>

      {/* Display message when rating is 5 */}
      <div className='resultpageRatingBoxes text-white '>
      {destination.ratings[0].food === 5 &&
      <p className='bg-yellow-500  my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Big variety of restaurants</p>
      }
      {destination.ratings[1].nightlife === 5 &&
      <p className='bg-yellow-600 my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Vibrant nightlife</p>
      }
      {destination.ratings[2].LGBTQ === 5 &&
      <p className='bg-green-700 my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Big LBTQ+ stage and famous for it's diversity</p>
      }
      {destination.ratings[3].culture === 5 &&
      <p className='bg-green-900 my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Great for culture lovers</p>
      }
      {destination.ratings[4].dayTrips === 5 &&
      <p className='bg-blue-800 my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Many great places in their surroundings</p>
      }
      {destination.ratings[5].budgetFriendy === 5 &&
      <p className='bg-blue-700 my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Perfect if you travel on a budget!</p>
      }
      {destination.ratings[6].spaLuxury === 5 &&
      <p className='bg-red-500 my-2 rounded-lg w-2/3 mx-auto py-1 px-3 shadow-xl'>Many options if you wanna treat yourself</p>
      }
      {destination.ratings[7].adventureOutdoor === 5 &&
      <p className='bg-red-800 my-2 rounded-lg w-2/3 mx-auto'>Great option for the adrenaline junkie or nature lovers</p>
      }


      </div>

  </div>
             
)
}

export default TravelResultPage
