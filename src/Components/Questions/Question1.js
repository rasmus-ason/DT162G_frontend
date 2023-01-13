
const Question1 = ({Q1filter}) => { 
    
    let category;
  
    //Set value to variable
    const beachchill = () => {  
        category = "beachchill"
        Q1filter(category) }

    const sunnycities = () => { 
        category = "sunnycities"
        Q1filter(category) }

    const capitals = () => { 
        category = "capitals"
        Q1filter(category) }

    const smallercities = () => {  
        category = "smallercities"
        Q1filter(category) }

    const natureadventure = () => { 
        category = "natureadventure"
        Q1filter(category) }

    const culture = () => { 
        category = "culture"
        Q1filter(category) }
    

    return (
        <div>
            <h2 className="text-center text-3xl">Select type of trip!</h2><br></br>
        
            <div 
            className="categoryBtns flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-3"
            >
          
                <button onClick={() => beachchill()} className="m-2" >Beach & Chill</button>
                <button onClick={() => sunnycities()} className="m-2" >Sunny Cities</button>
                <button onClick={() => capitals()} className="m-2">Big Cities & Capitals</button>
                <button onClick={() => smallercities()} className="m-2">Smaller Cities</button>
                <button onClick={() => natureadventure()} className="m-2">Nature & Adventure</button>
                <button onClick={() => culture()} className="m-2">Culture</button>
             
            </div>    

           

           
                  
                

            

            </div>

    )
    
    
    }
    
    export default Question1
  