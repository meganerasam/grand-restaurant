import React, { useState } from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroTitleContainer,
  HeroH1,
  HeroH3,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = ({ isOpen, toggle }) => {

  return (
    <HeroContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroP>Welcome to</HeroP>
          <HeroTitleContainer>
            <HeroH1>RESTONAME</HeroH1>
            <HeroH3>Slogan</HeroH3>
          </HeroTitleContainer>
          <HeroBtn>Make a reservation</HeroBtn>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
