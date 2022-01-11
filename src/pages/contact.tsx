import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import OfficerList from '../components/OfficerList';

interface ContactPageProps {}

const ContactPage: React.FC<ContactPageProps> = () => (
  <Layout>
    <SEO title="Contact" />
    <OfficerList />
  </Layout>
);

export default ContactPage;
