import React from 'react';
import { Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Overview from '../components/Overview';
import Contact from '../components/Contact';

const Index: React.FC = () => (
  <Layout>
    <Flex flexDirection="column">
      <Overview />
      <Contact />
    </Flex>
  </Layout>
);

export default Index;
