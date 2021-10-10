import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <Grid templateRows="50px auto" bg="scheme.main" color="scheme.text">
    <Navbar links={['schedule']} />
    <Box maxH="100vh" padding={5}>
      {children}
    </Box>
  </Grid>
);

export default Layout;
