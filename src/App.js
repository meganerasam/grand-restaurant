import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NavbarSticky from './components/NavbarSticky';

function App() {

  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window.scrollY > 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <GlobalStyle />
      <Navbar sticky={sticky} toggle={toggle} />
      <Hero toggle={toggle} isOpen={isOpen} />
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
