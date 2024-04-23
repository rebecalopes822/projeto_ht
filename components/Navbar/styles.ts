import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: black; 
  width: 100%;
  height: 52px;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  padding: 0;
  margin: 0;
  font-size: 15px;
`;

export const NavItem = styled.li`
  &:hover {
    color: #00A3FF;
  }
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: white;
  transition: all 0.3s;
  &:hover {
    color: #00A3FF;
  }
`;
