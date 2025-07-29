// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import FieldsOfWork from '../components/FieldsOfWork';
import GoodAt from '../components/GoodAt';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash-based scrolling
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Scroll to top when no hash
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div>
      <Header />
     
      <FieldsOfWork id="projects" />
      <GoodAt />
    </div>
  );
}

export default Home;