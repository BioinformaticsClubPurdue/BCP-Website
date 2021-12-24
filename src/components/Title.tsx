import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Icon from './Icon';

interface TitleProps {}

const Title: React.FC<TitleProps> = () => (
  <Box
    bg="scheme.dark"
    pt={[30, 100, 175]}
    pb="10"
    textAlign="center"
    width="100%"
    px={[4, 20, 50]}
  >
    <Box maxH="200px">
      <Icon />
    </Box>
    <Text fontSize={['4xl', '5xl']} fontWeight="extrabold" color="white">
      Biomedical Data Science and Bioinformatics Club at Purdue
    </Text>
  </Box>
);

export default Title;
