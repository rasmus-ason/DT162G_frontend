
const Question2 = ({Q2filter}) => { 

    let season;

    //Set value to variable
    const summerCheckbox = async () => {  
        season = "summer";
        Q2filter(season) }

    const fallCheckbox = async () => {  
        season = "fall";
        Q2filter(season) }

    const winterCheckbox = async () => {  
        season = "winter";
        Q2filter(season) }

    const springCheckbox = async () => {  
        season = "spring";
        Q2filter(season) }

    return (
            <div>
                <h2 className="text-center text-xl md:text-2xl mb-6">When would you like to go?</h2>
                    <div 
                    className="categoryBtns flex flex-col sm:grid sm:grid-cols-2 gap-4">
                    <button onClick={() => summerCheckbox()} >Summer</button>
                    <button onClick={() => fallCheckbox()} >Fall</button>
                    <button onClick={() => winterCheckbox()} >Winter</button>
                    <button onClick={() => springCheckbox()} >Spring</button>   
                </div>     
            </div>

    )
    
    
    }
    
    export default Question2
  