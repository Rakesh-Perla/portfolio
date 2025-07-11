import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Services from './components/Services';
import ProjectsCarousel from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1700,         
    easing: 'ease-in-out',  
    offset: 100,             
    once: true,             
    mirror: false           
  });
}, []);

  return (
    <div className='main-container'>
      <Hero />
      <Skills />
      <Services />
      <ProjectsCarousel />
      <Certificates />
      <Contact />
    </div>
  );
}

export default App;
