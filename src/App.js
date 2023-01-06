import { useState } from 'react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Components
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Home from './Components/Home'
import ManageDestinations from './Views/Admin/ManageDestinations'
import AdminContainer from './Views/Admin/AdminContainer'
import FormQuestionsContainer from './Views/UserForm/FormQuestionsContainer'

const App = () => {

  const isLoggedIn = window.localStorage.getItem("loggedIn")
 
  return (
   
    <div className="App">

       <Header /> 

      

        <main>

       <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/form' element={<FormQuestionsContainer />} />
          <Route path='/about' element={<About />} /> 
          <Route exact path='/adminpage' element={isLoggedIn == "true" ? <ManageDestinations /> : <AdminContainer />} />
          <Route path='/manage-destinations' element={<ManageDestinations />} /> 
          <Route exact path='/admin' element={<AdminContainer />} />
         
        
        </Routes>

        </main>


        <Footer />

    </div>
   
    
  )
}

export default App;
