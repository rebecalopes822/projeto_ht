import React from 'react';
import { NavbarContainer, NavList, NavItem,NavLink } from './styles';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavList>
        <NavItem>
          <a href="/">Home</a>
        </NavItem>
        <NavItem>
          <a href="/acessibilidade">Acessibilidade</a>
        </NavItem>
        <NavItem>
          <a href="/contato">Contato</a>
        </NavItem>
        <NavItem>
          <a href="/login">Login</a>
        </NavItem>
      </NavList>
    </NavbarContainer>
  );
};

export default Navbar;
