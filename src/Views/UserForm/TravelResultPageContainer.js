import TravelResultPage from "../UserForm/FormResult/TravelResultPage"
import NoDestinationsPage from '../UserForm/FormResult/NoDestinationsPage'
import { AiFillCloseCircle } from 'react-icons/ai'


const TravelResultPageContainer = ({ destinations, restartForm }) => {

    //Display results as default
    let resultsToDisplay = true;

    //Check if destinations length is zero - then render noDestionationsPage
    if(destinations.length === 0) {
        resultsToDisplay = false
    }

    //Call method to restart form
    const backtoForm = () => {
        restartForm()
    }

    return (

    <div className="relative w-5/6 md:w-2/3 mx-auto bg-gray-200 py-10 px-1 rounded-xl opacity-95">
        <div className="h-96 overflow-y-scroll">

            {/* Restart form button  */}
            <span
            onClick={() => backtoForm()}
            className="hover:cursor-pointer absolute top-8 right-8"
            >
            < AiFillCloseCircle size={24}/>
            </span>

            {/* Rendered component is destinations is not empty */}
            {resultsToDisplay && 
            <h2 className="text-center text-pink-700 text-3xl">Recomondations for you!</h2>
            }
                <div className=""> 
                    {resultsToDisplay && 
                    destinations.map((destination) => (
                    < TravelResultPage 
                    key={destination._id}
                    destination={destination} />
                    )) 
                    }
                </div>

            {/* Rendered component is destinations is not empty */}
            { !resultsToDisplay && 
            < NoDestinationsPage
            backtoForm={backtoForm}
            />
            }
        </div>
    </div>    
    )  
}
export default TravelResultPageContainer
  