import styled from 'styled-components';

export const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 200px;
  background: #ececec;
  position: relative;
  margin-bottom: 2.5rem;
`;

export const ProductImg = styled.img`
  height: 200px;
  min-width: 200px;
  max-width: 100%;
`;

export const ProductsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 2.5rem;
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;

export const ProductTitle = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  color: #cfa670;
  line-height: 1.3;
  margin-bottom: 1.2rem !important;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  font-family: 'Lato', sans-serif;
  
`;

export const ProductDesc = styled.p`
  font-size: 1rem;
  line-height: 24px;
  font-family: 'Lato', sans-serif;
  color: #1c2237;
  margin-bottom: 2.8rem
`;

export const ProductPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'Lato', sans-serif;
  position: absolute;
  bottom: 0;
`;

export const ProductButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
