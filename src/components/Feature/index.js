import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Menu of the Day</h1>
      <p>Starter - Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <p>Main - Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <p>Desse alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Make a reservation</FeatureButton>
    </FeatureContainer>
  );
};

export default Feature;
