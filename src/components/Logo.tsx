import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => (
  <Box width="100%" color={['white', 'white', 'scheme.main', 'scheme.main']}>
    <Text fontSize="lg" fontWeight="bold">
      BCP
    </Text>
  </Box>
);

export default Logo;
