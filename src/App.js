import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/howitworks' element={<HowItWorks/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
