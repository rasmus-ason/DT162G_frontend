import { useState} from 'react'

const Question3 = ({Q3filter}) => { 
    
    const [food, setFood] = useState(3);
    const [nightlife, setNightlife] = useState(3);
    const [LGBTQ, setLGBTQ] = useState(3);
    const [culture, setCulture] = useState(3);
    const [daytrips, setDaytrips] = useState(3);
    const [budget, setBudget] = useState(3);
    const [spa, setSpa] = useState(3);
    const [adventureActivities, setAdventureActivities] = useState(3);

    const submitTravelForm = () => {

        Q3filter(food, nightlife, LGBTQ, culture, daytrips, budget, spa, adventureActivities)
        
    }
    

    return (
        
            <div>
                

                <div className="flex flex-col text-center mb-4">

            <h3 className="text-3xl">Rate Importance</h3>

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

            <button className='submitBtn w-full' onClick={() =>submitTravelForm()}>Where should I travel?</button>
                  

            </div>

    )
    
    
    }
    
    export default Question3
  