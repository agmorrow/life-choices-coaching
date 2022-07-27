import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import FAQ from './components/FAQ';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className='App'>
      <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/faq' element={<FAQ/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer />
      </div>
      
      </>
    </div>
  )
}

export default App;


