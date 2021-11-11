import React from 'react';
import { Grid, Text, Box } from '@chakra-ui/react';
import Icon from './Icon';

interface OverviewProps {}

const Overview: React.FC<OverviewProps> = () => (
  <Grid
    templateColumns="1fr 1fr"
    p={[20, 10, 10, 10]}
    gap={40}
    bg="scheme.dark"
  >
    <div>
      <Box maxH="200px">
        <Icon />
      </Box>
      <Text fontSize="4xl" fontWeight="extrabold">
        Biomedical Data Science and Bioinformatics Club at Purdue
      </Text>
    </div>
    <Text fontWeight="semibold">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Text>
  </Grid>
);

export default Overview;
