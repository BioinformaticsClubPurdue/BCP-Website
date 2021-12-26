import React from 'react';
import { Grid, Box } from '@chakra-ui/react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Grid
    templateRows="50px auto"
    h="100vh"
    overflowY="auto"
    overflowX="auto"
    background="scheme.background"
  >
    <Navbar links={['contact', 'schedule', 'blog']} />
    <Box as="main">{children}</Box>
  </Grid>
);

export default Layout;
