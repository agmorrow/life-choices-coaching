import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App;


