import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Box, Text } from '@chakra-ui/react';

interface IconProps {}

const Icon: React.FC<IconProps> = () => (
  <Box color="scheme.text">
    <StaticImage
      src="../assets/placeholder_icon.png"
      alt="Club icon"
      height={40}
      width={40}
    />
    <Text>BIX Purdue</Text>
  </Box>
);

export default Icon;
