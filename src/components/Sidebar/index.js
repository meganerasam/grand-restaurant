import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Welcome</SidebarLink>
        <SidebarLink to='/'>About us</SidebarLink>
        <SidebarLink to='/'>Menu</SidebarLink>
        <SidebarLink to='/'>Gallery</SidebarLink>
        <SidebarLink to='/'>Find us</SidebarLink>
        <SidebarLink to='/'>Reservation</SidebarLink>
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
