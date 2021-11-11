import React from 'react';
import { Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Details from '../components/Details';
import Contact from '../components/Contact';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => (
  <Layout>
    <Flex flexDirection="column">
      <Title />
      <Details />
      <Contact />
    </Flex>
  </Layout>
);

export default Index;
