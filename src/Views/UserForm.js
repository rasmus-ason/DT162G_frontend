import { useState, useEffect } from 'react'
import React from 'react'

//Import result component
import TravelResultPageContainer from '../Views/UserForm/TravelResultPageContainer'
//Import questions
import Question1 from '../Components/Questions/Question1'
import Question2 from '../Components/Questions/Question2'
import Question3 from '../Components/Questions/Question3'

//Import image path
const bg_userform = new URL("../Components/Images/bg_userformcomp.jpg", import.meta.url)

const UserForm = () => {  

    //Global states
    const [showResult, setShowResult] = useState(false)
    const [displayQuestion, setDisplayQuestion] = useState(1)
    const [destinations, setDestinations] = useState([])

        //Fetch data from db
        useEffect(() => {
        const getDestinations = async () => {
            const destinationFromServer = await fetchDestinations()
            setDestinations(destinationFromServer)
            setShowResult(false) 
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
            //Filtrera bort alla objekt som inte innehållet den kategori som är medskickat 
            setDestinations(destinations.filter((des) => des.category === category))
            //Display next question
            setDisplayQuestion(2)  
        }
          
        //Filter on season to travel
        const Q2filter = async (season) => {
         
          //If summer is set to true, then summer has to set to true in db
           if(season === "summer") {
             setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.summer === true)))
           }
           if(season === "fall") {    
             setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.fall === true)))
           }
           if(season === "winter") {    
             setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.winter === true)))
           }
           if(season === "spring") {       
             setDestinations(destinations.filter((des) => des.best_months.find(rank => rank.spring === true)))
           }

          setDisplayQuestion(3)

        }
          
        //Filter on ratings
        const Q3filter = async (foodForm, nightlifeForm, LGBTQForm, daytripsForm, cultureForm, budgetFriendlyForm, spaForm, adventureForm) => {
      
        //Filter destinations based on ratings
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.food >= foodForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.nightlife >= nightlifeForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.LGBTQ >= LGBTQForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.culture >= cultureForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.daytrips >= daytripsForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.budgetFriendly >= budgetFriendlyForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.spaLuxury >= spaForm))) &&
        setDestinations(destinations.filter((des) => des.ratings.find(rate => rate.adventureOutdoor >= adventureForm )))             
     
        //Hide question bo
        setDisplayQuestion(null)
        //Call setShowResult change to opposite value - true
        setShowResult(!showResult)
        
        }

        //Restart form
        const restartForm = () => {
          window.location.reload()
          setDisplayQuestion(1)
          setShowResult(!showResult)

        }

         

  return (
    <div
    style={{ backgroundImage:`url(${bg_userform})` }}
    className='w-full h-screen pt-12 bg-cover bg-bottom'
    id="bg-userform"
    >
      <div>
      {/* Show result components when boolean value is set to true */}
      { showResult && 
      <TravelResultPageContainer 
      destinations={destinations}
      restartForm={restartForm}
      /> }

      {!showResult &&
      <>
        <div className="
        relative w-5/6 md:w-2/3 text-sm sm:text-md xl:text-xl text-white font-Poppins bg-gray-800 pb-20 px-12 pt-10 mx-auto ">    
        { displayQuestion === 1 && <Question1 Q1filter={Q1filter}/>   }
        { displayQuestion === 2 && <Question2 Q2filter={Q2filter}/>   }
        { displayQuestion === 3 &&  <Question3 Q3filter={Q3filter}/>  }
        </div>
      </>
      }   
    </div>
  </div>
  )
}

export default UserForm
