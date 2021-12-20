import React from 'react';
import { Grid } from '@chakra-ui/react';

interface ResponsiveGridProps {}

const ResponsiveGrid: React.FC<ResponsiveGridProps> = ({ children }) => (
  <Grid
    templateColumns={['repeat(1, 1fr)', null, 'repeat(2, 1fr)']}
    gap="10"
    width="100%"
  >
    {children}
  </Grid>
);

export default ResponsiveGrid;
