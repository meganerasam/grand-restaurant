import React, { useEffect, useState } from 'react';
import { NavIconSticky, BarsSticky, NavSticky, NavLinkSticky } from './NavbarStickyElements';

const NavbarSticky = ({ toggle }) => {

  return (
    <>
      <NavSticky>
        <NavLinkSticky to='/'>Welcome</NavLinkSticky>
        <NavLinkSticky to='/'>About us</NavLinkSticky>
        <NavLinkSticky to='/'>Menu</NavLinkSticky>
        <NavLinkSticky to='/'>Galery</NavLinkSticky>
        <NavLinkSticky to='/'>Find us</NavLinkSticky>
        <NavLinkSticky to='/'>Reservation</NavLinkSticky>
        <NavIconSticky onClick={toggle}>
          <p>Menu</p>
          <BarsSticky />
        </NavIconSticky>
      </NavSticky>
    </>
  );
};

export default NavbarSticky;
