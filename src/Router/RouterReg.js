import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'


// we are creating route inside this app


function RouterReg() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        
      </nav>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='about/' element ={<About/>}/>
        <Route path = 'contact/' element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterReg
