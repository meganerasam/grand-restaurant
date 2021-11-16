import React from 'react';
import { Nav, NavLink, NavIcon, Bars, NavReservationLink } from './NavbarElements';

const Navbar = ({ toggle, sticky }) => {

  return (
    <>
      <Nav sticky={sticky}>
        <NavLink sticky={sticky} to='/'>Welcome</NavLink>
        <NavLink sticky={sticky} to='/'>About us</NavLink>
        <NavLink sticky={sticky} to='/'>Menu</NavLink>
        <NavLink sticky={sticky} to='/'>Gallery</NavLink>
        <NavLink sticky={sticky} to='/'>Find us</NavLink>
        <NavReservationLink sticky={sticky} to='/'>Reservation</NavReservationLink>
        <NavIcon onClick={toggle}>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
