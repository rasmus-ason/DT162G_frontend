import { useState} from 'react'

const Question3 = ({Q3filter}) => { 
    
    //Set default value to 3 so no null values gets stored
    const [food, setFood] = useState('3');
    const [nightlife, setNightlife] = useState('3');
    const [LGBTQ, setLGBTQ] = useState('3');
    const [culture, setCulture] = useState('3');
    const [daytrips, setDaytrips] = useState('3');
    const [budget, setBudget] = useState('3');
    const [spa, setSpa] = useState('3');
    const [adventureActivities, setAdventureActivities] = useState('3');

    const submitTravelForm = () => {
        //Send values to parent
        Q3filter(food, nightlife, LGBTQ, culture, daytrips, budget, spa, adventureActivities)
        
    }
    return ( 
        <div>
            <div className="flex flex-col text-center mb-4 userform">
                <h3 className="text-xl md:text-3xl mb-4">Rate Importance</h3>
                    <div className='flex flex-col lg:flex-row lg:gap-6 mx-auto'>
                        <div>
                            <div className='flex flex-col'>
                                <label>Food</label>
                                <input 
                                type="range"
                                value={food} 
                                min="1" max="5"
                                onChange={(e) => setFood(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Nightlife</label>
                                <input 
                                type="range"
                                value={nightlife} 
                                min="1" max="5"
                                onChange={(e) => setNightlife(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>LGBTQ</label>
                                <input 
                                type="range"
                                value={LGBTQ} 
                                min="1" max="5"
                                onChange={(e) => setLGBTQ(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Culture & Museums</label>
                                <input 
                                type="range"
                                value={culture} 
                                min="1" max="5"
                                onChange={(e) => setCulture(e.target.value)}
                                />
                            </div>
                        </div>   
                        <div>
                            <div className='flex flex-col'>
                                <label>Day Trips</label>
                                <input 
                                type="range"
                                value={daytrips} 
                                min="1" max="5"
                                onChange={(e) => setDaytrips(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Budget Friendly</label>
                                <input 
                                type="range"
                                value={budget} 
                                min="1" max="5"
                                onChange={(e) => setBudget(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Spa & Luxury</label>
                                <input 
                                type="range"
                                value={spa} 
                                min="1" max="5"
                                onChange={(e) => setSpa(e.target.value)}
                                />
                            </div>
                            <div className='flex flex-col'>
                                <label>Adventure & Outdoor Activities</label>
                                <input 
                                type="range"
                                value={adventureActivities} 
                                min="1" max="5"
                                onChange={(e) => setAdventureActivities(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            {/* Submitting button */}
            <button className='submitBtn w-full' onClick={() =>submitTravelForm()}>Where should I travel?</button>
        </div>
    )  
}
export default Question3
  