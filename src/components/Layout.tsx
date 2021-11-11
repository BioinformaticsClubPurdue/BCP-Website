import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Grid
    templateRows="50px auto"
    bg="white"
    color="scheme.text"
    h="100vh"
    overflowY="auto"
  >
    <Navbar links={['schedule', 'calendar']} />
    <Box>{children}</Box>
  </Grid>
);

export default Layout;
