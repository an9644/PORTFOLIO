import React from 'react'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Portfolio from './Pages/Portfolio';
import Education from './Pages/Education';
import Certificates from './Pages/Certificates';
import Services from './Pages/Services';


const App = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <>
       <Route path='/' element={<Portfolio />} />

        <Route path='/education' element={<Education />} />
        <Route path='/certificates' element={<Certificates/>} />
        <Route path='/services' element={<Services/>}/>


        </>
        
    ))   



  return (
    <RouterProvider router={router} />
  )
};

export default App