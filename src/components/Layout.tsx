import { Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Navbar items={['Home', 'Schedule']} />
    <Box>{children}</Box>
  </>
);

export default Layout;
