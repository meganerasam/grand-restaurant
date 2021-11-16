import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

export const Nav = styled.nav`
  background: ${(props) =>
    props.sticky ? '#fff' : 'transparent'
  };
  height: 80px;
  display: flex;
  justify-content: right;
  font-weight: 700;
  margin-right: 15rem;
  width: 100%;
  position: ${(props) =>
    props.sticky ? 'fixed' : 'absolute'
  };
  top: 0;
  z-index: 100000;
  padding-right: 100px;

  @media screen and (max-width: 400px) {
    background: transparent;
    padding: 1rem;
    margin-top: 2rem;
    z-index: 1;
  }
`;

export const NavLink = styled(Link)`
color: ${(props) =>
    props.sticky ? '#cfa670' : '#fff'
  };
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
font-family: 'Lato', sans-serif;
font-size: 12px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
padding: 37px 15px 38px 15px;

  &:hover {
  transform: scale(1.3);
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  display: none !important;
}`
  ;

export const NavReservationLink = styled(Link)`
color: ${(props) =>
    props.sticky ? '#cfa670' : '#fff'
  };
font-size: 2rem;
display: flex;
align-items: center;
text-decoration: none;
cursor: pointer;
font-family: 'Lato', sans-serif;
font-size: 12px;
font-weight: 600;
letter-spacing: 1px;
text-transform: uppercase;
margin: 20px;
padding: 10px;
border: 2px solid #cfa670;

  &:hover {
  transform: scale(1.3);
  cursor: pointer;
}

@media screen and (max-width: 400px) {
  display: none !important;
}
`;

export const NavIcon = styled.div`
display: block;
position: absolute;
top: 0;
margin-right: 1rem;
cursor: pointer;
color: #fff;

@media screen and (min-width: 400px) {
  display: none !important;
}
`;

export const Bars = styled(FaBars)`
font-size: 2rem;
transform: translate(-50 %, -15 %);
`;
