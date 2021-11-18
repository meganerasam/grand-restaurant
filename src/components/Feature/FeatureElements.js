import styled from 'styled-components';
import FeaturePic from '../../images/featured5.jpg';

export const FeatureContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3)),
    url(${FeaturePic});
  background-attachment: fixed;
  height: 100vh;
  max-height: 500px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;

  h1 {
    font-size: clamp(3rem, 5vw, 5rem);
    font-family: 'Lato', sans-serif;
    margin-bottom: 1rem;
    letter-spacing: 0.1rem;
  }

  p {
    margin-bottom: 1rem;
    font-size: clamp(1rem, 3vw, 2rem);
    font-family: 'Lato', sans-serif;
  }
`;
export const FeatureButton = styled.button`
font-size: 1.4rem;
margin-top: 1.4rem;
padding: 1rem 4rem;
border: none;
background: #cfa670;
color: #fff;
transition: 0.2s ease-out;
border-radius: 15px;
font-family: 'Lato', sans-serif;

&:hover {
  background: #cfa670;
  transform: scale(1.1); 
  cursor: pointer;
  color: #fff;
}
`;
