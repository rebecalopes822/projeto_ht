// pages/components/Footer/styles.ts

import styled from 'styled-components';

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00A3FF;
  height: 50px;
  color: white;
  font-size: 14px;
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.3s;
  &:hover {
    color: #FFFFFF80; /* Adicione uma transparência ao hover */
  }
`;
