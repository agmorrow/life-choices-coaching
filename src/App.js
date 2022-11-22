import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
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


