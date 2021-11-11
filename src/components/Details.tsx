import React from 'react';
import { Text, VStack, HStack } from '@chakra-ui/react';
import { FaTable, FaDna, FaCode } from 'react-icons/fa';

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => (
  <VStack py="10">
    <HStack>
      <FaTable size="40px" />
      <FaDna size="40px" />
      <FaCode size="40px" />
    </HStack>
    <Text fontSize="3xl">
      Interested in data science, biology, or programming?
    </Text>
  </VStack>
);

export default Details;
