import React,{useEffect} from 'react'
import Homepage from './Pages/Homepage'
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import Hero from './Components/Hero';



function App() {
  
  return (
    <> 
       <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Project" element={<Project  />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
        <Footer />
    </>
  );
}
export default App