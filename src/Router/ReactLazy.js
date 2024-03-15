// its nothing but its just a loading the content not on the initial time its load when it really needed

import { BrowserRouter, Route,Routes } from 'react-router-dom'

// in router page declare like this

const LazyAbout = React.lazy(()=> import('./About'))


function ReactLazy(){
        
    return(
        <>
        <h1> helll about page </h1>
        <BrowserRouter>
            <Routes>
                <React.Suspense  fallback="loading....">
                <Route path='/' element={<Home/>} />
                <Route path='about/' element={<LazyAbout />} />
                </React.Suspense>
            </Routes>
        </BrowserRouter>
        </>
    )
}

