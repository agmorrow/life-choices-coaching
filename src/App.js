import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Footer from './components/Footer';
import Home from './pages/Home';
import ChristianCounseling from './pages/dropdown/ChristianCounseling';
import CrisisCoaching from './pages/dropdown/CrisisCoaching';
import SelfCare from './pages/dropdown/SelfCare.jsx';
import WorkLife from './pages/dropdown/WorkLife';
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
          <Route path='/christiancounseling' element={<ChristianCounseling/>}/>
          <Route path='/crisiscoaching' element={<CrisisCoaching/>}/>
          <Route path='/selfcare' element={<SelfCare/>}/>
          <Route path='/worklife' element={<WorkLife/>}/>
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


