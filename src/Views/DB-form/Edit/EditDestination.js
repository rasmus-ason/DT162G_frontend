import React from 'react'
import { useState, useCallback, useEffect } from 'react'
import ErrorMessage from '../../../Components/Messages/ErrorMessage';
import { IoClose } from 'react-icons/io5';


const EditDestination = ({destinationId, closeEditForm, updatedDestination}) => {

    const [destination, setDestination] = useState([])

    const [destinationName, setDestinationName] = useState();
    const [country, setCountry] = useState('');
    const [category, setCategory] = useState('');
     
    const [food, setFood] = useState('');
    const [nightlife, setNightlife] = useState('');
    const [LGBTQ, setLGBTQ] = useState('');
    const [culture, setCulture] = useState('');
    const [daytrips, setDaytrips] = useState('');
    const [budget, setBudget] = useState('');
    const [spa, setSpa] = useState('');
    const [adventureActivities, setAdventureActivities] = useState('');

    const [summer, setSummer] = useState('');
    const [spring, setSpring] = useState('');
    const [fall, setFall] = useState('');
    const [winter, setWinter] = useState('');

    const [errorMessageReqEdit, setErrorMessageReqEdit] = useState(false)
    const [errorCheckboxes, setErrorCheckboxes] = useState(false)


    //Fetch data from db
    useEffect(() => {
      const getDestination = async () => {
          const destinationFromServer = await fetchDestination()
          setDestination(destinationFromServer)
          
   
      }
      getDestination()
      }, [])

      const fetchDestination = async () => {
        const res = await fetch('http://localhost:4000/api/destinations/' + destinationId)
        const data = await res.json() 
        return data
      }

    const loadData = () => {
        setDestinationName(destination.destinationName)
        setCountry(destination.country)
        setCategory(destination.category)

        setFood(destination.ratings[0].food)
        setNightlife(destination.ratings[1].nightlife)
        setLGBTQ(destination.ratings[2].LGBTQ)
        setCulture(destination.ratings[3].culture)
        setDaytrips(destination.ratings[4].daytrips)
        setBudget(destination.ratings[5].budgetFriendly)
        setSpa(destination.ratings[6].spaLuxury)
        setAdventureActivities(destination.ratings[7].adventureOutdoor)

        setSummer(destination.best_months[0].summer)
        setFall(destination.best_months[1].fall)
        setWinter(destination.best_months[2].winter)
        setSpring(destination.best_months[3].spring)

    }

    const onFormSubmit = (e) => {

      //Set default values of error messages
      setErrorCheckboxes(false)
      setErrorMessageReqEdit(false)

        e.preventDefault();

        if(destinationName == ""){
          setErrorMessageReqEdit(true)
          return;
        }

        if(country == ""){
          setErrorMessageReqEdit(true)
          return;
        }

        if((summer) || (fall) || (winter) || (spring)){
          

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

          const body = {
              destinationName : destinationName,
              country : country,
              category : category,
              ratings : ratingsArray,
              best_months : monthsArray
              
          }

            fetch('http://localhost:4000/api/destinations/' + destination._id, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
                })
                .then((response) => {
                  if(!response.ok) {
                    throw new Error(response.status);
                  } 
                  if(response.ok) {
                    alert("Destination Updated Successfully!")
                    patchSuccessCloseBox()
                  }
                  return response.json();
                })
                .then((data) => {
                  updatedDestination(data)
                  console.log("DATA UPDATED");
                  
                  
                })
                .catch((error) => {
                  console.log('error: ' + error);
                })
            }else {
              setErrorCheckboxes(true)
              return
            }

            const patchSuccessCloseBox = () => {

              setDestinationName('')
              setCountry('')
              setCategory('')
      
              setFood('')
              setNightlife('')
              setLGBTQ('')
              setCulture('')
              setDaytrips('')
              setBudget('')
              setSpa('')
              setAdventureActivities('')
      
              setSummer('')
              setFall('')
              setWinter('')
              setSpring('')
  
  
  
            }
          }


  
   


  return (
    <div className="popup">
        <div className="popup-inner bg-gray-800">
            <button className="absolute right-6 top-6" onClick={() => closeEditForm()}><IoClose size={24} /></button>

            <h3 className="text-3xl text-white my-2 text-center uppercase">Edit destination</h3>
            {errorMessageReqEdit && <ErrorMessage message={"Enter name and country of destination"}/>}


    <button 
    className="outline w-full py-1 my-4 text-white bg-gray-700 hover:bg-gray-800" 
    onClick={() => loadData()}>Load Data About {destination.destinationName}</button>

    <form className="flex flex-col" onSubmit={onFormSubmit}>

        
    <div className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col md:w-1/2">
        <h3 className="text-2xl text-white my-2 text-left">Edit destination info</h3>
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
          <input className='submitBtn w-full text-white font-Poppins font-bold' type="submit" value="Confirm edit" />
      </div>

        

    </form>
            
        </div>
    </div>
  ) 
}

export default EditDestination