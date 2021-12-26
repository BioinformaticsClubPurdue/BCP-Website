import React from 'react';
import { Text } from '@chakra-ui/react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => (
  <Layout>
    <SEO title="Contact" />
    <Text>Contact us</Text>
  </Layout>
);

export default ContactPage;
