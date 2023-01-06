import { useState, useEffect } from 'react'
import React from 'react'
//Import result component
import TravelResultPageContainer from './TravelResultPageContainer'
//Import questions
import Question1 from '../UserForm//Questions/Question1'
import Question2 from '../UserForm/Questions/Question2'
import Question3 from '../UserForm/Questions/Question3'

const FormQuestionsContainer = () => {

 
    // run this function from an event handler or an effect to execute scroll 

    //Global states
    const [showResult, setShowResult] = useState(false)
    const [displayQuestion, setDisplayQuestion] = useState(1)
    const [destinations, setDestinations] = useState([])

        //Fetch data from db
        useEffect(() => {
        const getDestinations = async () => {
            const destinationFromServer = await fetchDestinations()
            setDestinations(destinationFromServer) 
           
        }
        getDestinations()
        }, [])

        const fetchDestinations = async () => {
          const res = await fetch('http://localhost:4000/api/destinations')
          const data = await res.json() 
          return data
        }

        //Filter array based on category
        const Q1filter = async (category) => {
            console.log(destinations)
            //Filtrera bort alla objekt som inte innehållet den kategori som är medskickat 
            setDestinations(destinations.filter((des) => des.category === category))
            //Display next question
            setDisplayQuestion(2)
        }
          
        //Filter on season to travel
        const Q2filter = async (season) => {

          //If summer is set to true, then summer has to set to true in db
          if(season.summer === true) {
            console.log("in summer")
            setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.summer === true)))
          }
          if(season.fall === true) {
            console.log("in fall")
            setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.fall === true)))
          }
          if(season.winter === true) {
            console.log("in winter")
            setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.winter === true)))
          }
          if(season.spring === true) {
            console.log("in spring")
            setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.spring === true)))
          }
            

          setDisplayQuestion(3)

        }
          
        //Filter on ratings
        const Q3filter = async (food, nightlife, LGBTQ, daytrips, culture, budgetFriendly, spa, adventure) => {
              console.log(destinations)

             //Filter destinations based on ratings
             setDestinations(destinations.filter((des) => 
                des.ratings.find(rate => rate.food >= food) &&
                des.ratings.find(rate => rate.nightlife >= nightlife) &&
                des.ratings.find(rate => rate.LGBTQ >= LGBTQ) &&
                des.ratings.find(rate => rate.culture >= culture) &&
                des.ratings.find(rate => rate.daytrips >= daytrips) &&
                des.ratings.find(rate => rate.budgetFriendly >= budgetFriendly) &&
                des.ratings.find(rate => rate.spaLuxury >= spa) &&
                des.ratings.find(rate => rate.adventureOutdoor >= adventure )
              ))
        
            //Hide question components
            setDisplayQuestion(null)
          
            //Call setShowResult change to opposite value - true
            setShowResult(!showResult)

           
           
          }

         

  return (
    <div>

    {/* Show result components when boolean value is set to true */}
    { showResult && 
    <TravelResultPageContainer 
    destinations={destinations}
    /> }

      <h3 className='text-3xl text-pink-800 my-6 text-center'>Where are you going next?</h3>
    

      <div className="text-xl text-white font-Poppins bg-green-700 p-12 w-2/3 mx-auto mb-32">
    
      { displayQuestion === 1 && <Question1 Q1filter={Q1filter}/>   }
      { displayQuestion === 2 && <Question2 Q2filter={Q2filter}/>   }
      { displayQuestion === 3 &&  <Question3 Q3filter={Q3filter}/>  }
   
      </div>
  
      

    </div>
  )
}

export default FormQuestionsContainer
