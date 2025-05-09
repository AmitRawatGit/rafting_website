import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Activities />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;