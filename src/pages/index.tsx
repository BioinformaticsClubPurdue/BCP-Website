import React from 'react';
import { Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Overview from '../components/Overview';
import Details from '../components/Details';
import Contact from '../components/Contact';

const Index: React.FC = () => (
  <Layout>
    <Flex flexDirection="column">
      <Overview />
      <Details />
      <Contact />
    </Flex>
  </Layout>
);

export default Index;
