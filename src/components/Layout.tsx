import { Grid } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Grid
      templateRows="50px auto"
      bg="white"
      h="100vh"
      overflowY="auto"
      background="scheme.background"
    >
      <Navbar links={['schedule', 'blog']} />
      <main>{children}</main>
    </Grid>
  </>
);

export default Layout;
