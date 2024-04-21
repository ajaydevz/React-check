import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
const Lazyabout = React.lazy( ()=> import('./About'))

// we are creating route inside this app


function RouterReg() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        
      </nav>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='about/' element ={
        <React.Suspense fallback="loading...">
        <Lazyabout />
        </React.Suspense>}/>
        <Route path = 'contact/' element = {<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default RouterReg
