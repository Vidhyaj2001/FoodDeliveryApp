
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';

import Signup from './pages/Signup';

import Gallery from './pages/Gallery';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs'; 
import ContactUs from './pages/ContactUs'; 
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<Gallery />} />
    
 
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} /> 
        <Route path="/contact-us" element={<ContactUs />} /> 
      </Routes>


    </Router>
  );
}

export default App;
