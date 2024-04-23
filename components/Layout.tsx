// components/Layout.tsx

import React, { ReactNode } from 'react';
import  Footer  from './Footer';
import  Navbar  from './Navbar';
import { GlobalStyles } from '../styles/global';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
