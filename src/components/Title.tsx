import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Icon from './Icon';

interface TitleProps {}

const Title: React.FC<TitleProps> = () => (
  <Box bg="scheme.dark" pt="175" pb="10" px="100" textAlign="center">
    <Box maxH="200px">
      <Icon />
    </Box>
    <Text fontSize="5xl" fontWeight="extrabold" color="white">
      Biomedical Data Science and Bioinformatics Club at Purdue
    </Text>
  </Box>
);

export default Title;
