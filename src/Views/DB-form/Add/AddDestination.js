import React from 'react'
import ErrorMessage from '../../../Components/Messages/ErrorMessage'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5';


const AddDestination = ({newDestinationAdded, closeAddForm}) => {

    //States
    const [destinationName, setDestinationName] = useState(''); 
    const [country, setCountry] = useState('');
    const [category, setCategory] = useState('Big City');
    const [food, setFood] = useState(3);
    const [nightlife, setNightlife] = useState(3);
    const [LGBTQ, setLGBTQ] = useState(3);
    const [culture, setCulture] = useState(3);
    const [daytrips, setDaytrips] = useState(3);
    const [budget, setBudget] = useState(3);
    const [spa, setSpa] = useState(3);
    const [adventureActivities, setAdventureActivities] = useState(3);
    const [summer, setSummer] = useState(false);
    const [spring, setSpring] = useState(false);
    const [fall, setFall] = useState(false);
    const [winter, setWinter] = useState(false);

    //States for error messages
    const [errorMessageReq, setErrorMessageReq] = useState(false)
    const [errorCheckboxes, setErrorCheckboxes] = useState(false)

    //Submitting form
    const onFormSubmit = async (e) => {

        //Set default values of error messages
        setErrorCheckboxes(false)
        setErrorMessageReq(false)

        e.preventDefault();

        //Control length user input
        if((destinationName  == "") && (country == "")){
          setErrorMessageReq(true)
          return
        }
        
        //Continue if at least one of the checkboxes ar true
        if((summer) || (fall) || (winter) || (spring)){

            //Create array to body
            const ratingsArray =  [
                {"food" : food}, 
                {"nightlife" : nightlife},
                {"LGBTQ" : LGBTQ},
                {"culture" : culture},
                {"daytrips" : daytrips},
                {"budgetFriendly" : budget},
                {"spaLuxury" : spa},
                {"adventureOutdoor" : adventureActivities}
            ]
            const monthsArray = [
                {"summer" : summer},
                {"fall" : fall},
                {"winter" : winter},
                {"spring" : spring},
            ]

            //Create body for req
            const body = {
                  destinationName : destinationName,
                  country : country,
                  category : category,
                  ratings : ratingsArray,
                  best_months : monthsArray 
            }
              
            //Post destination
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
            };

            fetch('http://localhost:4000/api/destinations', requestOptions)
            .then((response) => {
                //Check status of response
                if(!response.ok) {
                  setErrorMessageReq(true)
                  throw new Error(response.status);
                } 
                if(response.ok) {
                  alert("Destination Added Successfully!")
                }
                return response.json();
              })
              .then(data => {
                //Send data to parent to update state
                newDestinationAdded(data)

              })
            //Display error msg if none of the checkboxes are set to true
            }else {
            setErrorCheckboxes(true)
            
            return
          }
        }
            
  return (
    //Container
    <div className="popup">
        {/* Popup box */}
        <div className="popup-inner bg-gray-800">
            {/* Close form */}
            <button 
            className="absolute right-6 top-6" 
            onClick={() => closeAddForm()}
            >
            <IoClose size={24}/>
            </button>

            <h3 className="text-3xl text-white my-2 text-center uppercase">Add destination</h3>
            {/* Form start */}
            <form className="flex flex-col" onSubmit={onFormSubmit}>  
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex flex-col md:w-1/2">
                <h3 className="text-2xl text-white my-2 text-left">Add destination info</h3>

                    {/* Error message */}
                    {errorMessageReq && <ErrorMessage message={"Enter name and country of destination"}/>}
                    

                    <label>Destination name</label>
                    <input 
                    type="text" 
                    id="destination" 
                    value={destinationName}
                    onChange={(e) => setDestinationName(e.target.value)}
                    />
                    
                    <label>Country</label>
                    <input 
                    type="text" 
                    id="country" 
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    />
                  
                    <label>Category</label>
                    <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    >
                        <option defaultValue={category} value="beachchill">Beach & Chill</option>
                        <option value="sunnycities">Sunny Cities</option>
                        <option value="capitals">Big City & Capitals</option>
                        <option value="smallercities">Smaller Cities</option>
                        <option value="natureadventure">Nature & Adventure </option>
                        <option value="culture"> Culture </option>
                    </select>

                    <h3 className="text-2xl text-white my-2 text-center md:text-left mt-4 ">Best time to visit?</h3>
                    {errorCheckboxes && <ErrorMessage message={"One of the seasons must be filled in"}/>}
                    <div className="flex flex-row gap-4 mx-auto md:ml-0">
                        <label>
                        <input
                        type="checkbox"
                        checked={summer}
                        onChange={(e) => setSummer(!summer)}
                        />Summer</label>
                        <label>
                        <input
                        type="checkbox"
                        checked={spring}
                        onChange={(e) => setSpring(!spring)}
                        />Spring</label>
                        <label>
                        <input
                        type="checkbox"
                        checked={fall}
                        onChange={(e) => setFall(!fall)}
                        />Fall</label>
                        <label>
                        <input
                        type="checkbox"
                        checked={winter}
                        onChange={(e) => setWinter(!winter)}
                        />Winter</label>
                    </div>
                </div>

                <div className="flex flex-col text-center mb-4 md:w-1/2">
                <h3 className="text-2xl text-white my-2 text-center">Rate destination</h3>

                        <label>Food</label>
                        <input 
                        type="range"
                        value={food} 
                        min="1" max="5"
                        onChange={(e) => setFood(e.target.value)}
                        />

                        <label>Nightlife</label>
                        <input 
                        type="range"
                        value={nightlife} 
                        min="1" max="5"
                        onChange={(e) => setNightlife(e.target.value)}
                        />

                        <label>LGBTQ</label>
                        <input 
                        type="range"
                        value={LGBTQ} 
                        min="1" max="5"
                        onChange={(e) => setLGBTQ(e.target.value)}
                        />

                        <label>Culture & Museums</label>
                        <input 
                        type="range"
                        value={culture} 
                        min="1" max="5"
                        onChange={(e) => setCulture(e.target.value)}
                        />

                        <label>Day Trips</label>
                        <input 
                        type="range"
                        value={daytrips} 
                        min="1" max="5"
                        onChange={(e) => setDaytrips(e.target.value)}
                        />

                        <label>Budget Friendly</label>
                        <input 
                        type="range"
                        value={budget} 
                        min="1" max="5"
                        onChange={(e) => setBudget(e.target.value)}
                        />

                        <label>Spa & Luxury</label>
                        <input 
                        type="range"
                        value={spa} 
                        min="1" max="5"
                        onChange={(e) => setSpa(e.target.value)}
                        />

                        <label>Adventure & Outdoor Activities</label>
                        <input 
                        type="range"
                        value={adventureActivities} 
                        min="1" max="5"
                        onChange={(e) => setAdventureActivities(e.target.value)}
                        />
                </div>
              </div>

              <div>
                  <input className='submitBtn w-full text-white' type="submit" value="Add" />
              </div>
          </form>    
        </div>
      </div>
      
  
   
  ) 

}


export default AddDestination
