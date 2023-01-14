const NoDestinationsPage = ({backtoForm}) => { 

    //Restart form
    const reloadPage = () => {
        backtoForm()
    }

    return (     
        <div className='mb-40'>
            <h2 
            className="text-pink-700 text-xl md:text-4xl text-center my-16">
            No destinations matched your requirements!</h2>

            <div className="mx-auto text-center">
                <button 
                className='bg-pink-700 shadow-xl text-white py-2 px-6 font-Poppins rounded-md'
                onClick={() => reloadPage()}
                >
                Re-do test and lower your expectations
                </button>
            </div>
        </div>
    ) 
}
export default NoDestinationsPage
  