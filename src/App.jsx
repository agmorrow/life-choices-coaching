import * as React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppBar from './components/AppBar';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <div>
        <AppBar />
      </div>
      
      </BrowserRouter>
    </div>
  )
}

export default App;


