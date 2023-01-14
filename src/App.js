import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Components
import Footer from './Views/Footer'
import Header from './Views/Header'
import AdminContainer from './Views/AdminContainer'
import UserForm from './Views/UserForm'

const App = () => {
 
  return (
   
    <div className="App">

       <Header /> 
        {/* Init routing */}
        <main>
          <Routes>
              <Route path='/' element={<UserForm />} />
              <Route exact path='/adminpage' element={<AdminContainer />} />
          </Routes>
        </main>

        <Footer />

    </div>
   
    
  )
}

export default App;
