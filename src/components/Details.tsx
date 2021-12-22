import React from 'react';
import { Text, VStack, UnorderedList, ListItem, Box } from '@chakra-ui/react';

interface DetailsProps {}

const Details: React.FC<DetailsProps> = () => (
  <VStack py="10" px="40" spacing="10" fontSize="2xl">
    {/* <HStack>
      <FaTable size="40px" />
      <FaDna size="40px" />
      <FaCode size="40px" />
    </HStack>
    <Text fontSize="3xl">
      Interested in data science, biology, or programming?
    </Text> */}
    <Box>
      <Text mb="1">
        The BDSBC at Purdue is for students that are interested in the
        intersection between data science and biology, used to solve modern
        medical challenges. Our goal is to provide educational and professional
        development in our club through:
      </Text>
      <UnorderedList>
        <ListItem>Progress through online Datacamp courses together</ListItem>
        <ListItem>Presentations from professionals in the field</ListItem>
        <ListItem>Practice coding exercises</ListItem>
      </UnorderedList>
    </Box>
    <Box width="100%">
      <Text>
        We also produce content aimed to achieve our goal. This includes:
      </Text>
      <UnorderedList>
        <ListItem>
          Spotify podcasts made by our members about bioinformatics
        </ListItem>
        <ListItem>Tutorial blogs on various bioinformatics exercises</ListItem>
      </UnorderedList>
    </Box>
  </VStack>
);

export default Details;
