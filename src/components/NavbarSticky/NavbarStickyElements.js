import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const NavSticky = styled.nav`
  background: #fff;
  height: 80px;
  display: flex;
  justify-content: right;
  font-weight: 700;
  margin-right: 15rem;
  position: sticky;
  top: 0;
`;

export const NavLinkSticky = styled(Link)`
  color: #cfa670;
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
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIconSticky = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;

  p {
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;

export const BarsSticky = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, -15%);
`;
