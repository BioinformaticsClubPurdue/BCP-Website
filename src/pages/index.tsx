import React from 'react';
import { Center, Text } from '@chakra-ui/react';
import Layout from '../components/Layout';

const Index: React.FC = () => (
  <Layout>
    <Center id="Home">
      <Text fontWeight="extrabold" fontSize="6xl" height="1000px">
        Bioinformatics Club Purdue
      </Text>
    </Center>
    <Center id="Schedule">
      <Text>Schedule</Text>
    </Center>
  </Layout>
);

export default Index;
