import styled from 'styled-components';
import ImgBg from '../../images/hero.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroH1BEFORE = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #cfa670;
  letter-spacing: 3px;
`;

export const HeroTitleContainer = styled.div`
  margin-bottom: 1rem;
  box-shadow: 3px 5px #cfa670;
`;

export const HeroH1 = styled.h1`
  font-size: 50px;
  margin-right: 1rem;
  letter-spacing: 3px;
  font-family: 'Lato', sans-serif;
`;

export const HeroH3 = styled.h3`
  font-size: 35px;
  margin: 1rem;
  letter-spacing: 3px;
  font-family: 'Lato', sans-serif;
  text-align: right;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  color: #cfa670;
  margin-bottom: 2rem;
  font-family: 'Kristi', cursive;
`;

export const HeroBtn = styled.button`
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
