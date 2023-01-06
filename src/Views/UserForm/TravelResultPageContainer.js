import TravelResultPage from "./TravelResultPage"
import NoDestinationsPage from './NoDestinationsPage'

const TravelResultPageContainer = ({ destinations }) => {

    let resultsToDisplay = true;

    if(destinations.length === 0) {
        resultsToDisplay = false
    }

    return (

        <div>
            <h2>Resultat</h2>

       
            {resultsToDisplay && 
            destinations.map((destination) => (

                <TravelResultPage 
                key={destination._id}
                destination={destination} />

            )) }

            {
            resultsToDisplay === false && 
            <NoDestinationsPage />
            }
            
            
                 
          

        </div>

   
                
            

        
    )
    
    
    }
    
    export default TravelResultPageContainer
  