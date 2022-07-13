import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppBar from './components/AppBar'; 
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <div>
        <AppBar />

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App;


