import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Grid
    templateRows="50px auto"
    minH="100vh"
    overflowY="hidden"
    overflowX="auto"
    background="scheme.background"
  >
    <Navbar links={['contact', 'schedule']} />
    <Box as="main">{children}</Box>
  </Grid>
);

export default Layout;
