import React from 'react';
import { Flex } from '@chakra-ui/react';
import Layout from '../components/Layout';
import Overview from '../components/Overview';
import Details from '../components/Details';
import Contact from '../components/Contact';

interface IndexProps {}

const Index: React.FC<IndexProps> = () => (
  <Flex flexDirection="column">
    <Overview />
    <Details />
    <Contact />
  </Flex>
);

Index.layout = Layout;

export default Index;
