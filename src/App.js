import React from 'react'
import Sidebar from './Components/Sidebar'
import Homepage from '../src/pages/Homepage'
import Form from '../src/pages/Form'
import Table from '../src/pages/Table'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <>
       <BrowserRouter >
      <Sidebar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/table' element={<Table/>}/>
          <Route path='/form' element={<Form/>}/>
          
        </Routes>
      </BrowserRouter >
    </>
    
  )
}

export default App