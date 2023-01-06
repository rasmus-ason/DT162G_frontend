
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
            className="categoryBtns grid grid-rows-2 grid-flow-col gap-4"
            >
          
                <button onClick={() => beachchill()} id="c1" className="beachchill" >Beach & Chill</button>
                <button onClick={() => sunnycities()} id="c2" className="sunnycities" >Sunny Cities</button>
                <button onClick={() => capitals()} id="c2" className="capitals">Big Cities & Capitals</button>
                <button onClick={() => smallercities()} id="c2" className="smallercities">Smaller Cities</button>
                <button onClick={() => natureadventure()} id="c2" className="natureadventure">Nature & Adventure</button>
                <button onClick={() => culture()} id="c2" className="culture">Culture</button>
             
            </div>    

           

           
                  
                

            

            </div>

    )
    
    
    }
    
    export default Question1
  