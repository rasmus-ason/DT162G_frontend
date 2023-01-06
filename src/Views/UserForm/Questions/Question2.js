import { useState } from 'react'

const Question2 = ({Q2filter}) => { 

    const [summer, setSummer ] = useState(false);
    const [fall, setFall ] = useState(false);
    const [winter, setWinter ] = useState(false);
    const [spring, setSpring ] = useState(false);


    
    
    //Set value to variable
    const summerCheckbox = async () => {  
        setSummer(!summer)
        Q2filter({"summer": true}) }

    const fallCheckbox = async () => {  
        setFall(!fall)
        Q2filter({"fall": true}) }

    const winterCheckbox = async () => {  
        setWinter(!winter)
        Q2filter({"winter": true}) }

    const springCheckbox = async () => {  
        setSpring(!spring)
        Q2filter({"spring": true}) }

    return (
        
            <div>
                <h2 className="text-center text-3xl mb-6">When would you like to go?</h2>
                
                <div 
                className="categoryBtns grid grid-rows-2 grid-flow-col gap-4"
                >
          
                <button onClick={() => summerCheckbox()} >Summer</button>
                <button onClick={() => fallCheckbox()} >Fall</button>
                <button onClick={() => winterCheckbox()} >Winter</button>
                <button onClick={() => springCheckbox()} >Spring</button>
              
             
            </div>     
                

            </div>

    )
    
    
    }
    
    export default Question2
  