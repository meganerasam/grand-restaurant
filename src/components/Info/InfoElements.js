import styled from 'styled-components';

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0 0 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};

  @media screen and (max-width: 768px) {
    padding: 50px 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  position: relative;
  min-width: 30%;
  background: #fff;
  flex: 0 0 200px;
  left: -150px;
  box-shadow: 10px 10px #cfa670;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    left: 0;
    box-shadow: 0 0;
  }
`;

export const InfoColumnTwoThird = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 70%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  position: relative;
  padding-top: 0;
  padding-bottom: 10px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  font-size: clamp(2rem, 2.5vw, 3rem);
  font-weight: 700;
  letter-spacing: 3px;
  font-family: 'Kristi', cursive;
  color: #cfa670;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  object-fit: contain;
  max-width: 45%;
  vertical-align: middle;
  display: inline-block;
  margin: 0.5rem;
`;

export const Heading = styled.h1`
    font-size: 50px;
    margin-right: 1rem;
    letter-spacing: 0.1rem;
    font-family: 'Lato', sans-serif;
    color: #000;
    text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-family: 'Lato', sans-serif;
  max-width: 440px;
  font-size: 1rem;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#1c2237')};
`;