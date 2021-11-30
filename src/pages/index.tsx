import React from 'react';
import { Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Title from '../components/Title';
import Details from '../components/Details';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => (
  <Layout>
    <SEO />
    <Flex flexDirection="column">
      <Title />
      <Details />
    </Flex>
  </Layout>
);

export default Index;
